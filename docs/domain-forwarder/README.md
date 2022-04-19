# Domain Forwarder

So OpEx made a redirect manager for domains and redirects that require HTTPS/TLS from the initial request, a type of redirect that is not currently supported by other redirect solutions on the platform.

This app uses CNAME/DNS SSL validation and can solve for a lot of different redirect scenarios. It might not be the best solution in all cases. 

It's best use case is handling incoming requests from vanity domains already on HTTPS, also called "Secure to Secure" redirects.

## Prerequisites

You need to be on the RealPage VPN.
You will need to provide your public IP address to DevOps or OpEx (the app maintainers) so that your connection can be whitelisted.

``` sh
curl ipconfig.me -L
```
This will return your current public IP. We will whitelist a range of IP addresses around this.

## Point the Domain

Domains entered into the `domains` table should also have a CNAME or A Record added to their DNS entry with their registrar.

The subdomains should have a CNAME entry pointing the domain to `domain-forwarder.g5dns.com`. This includes entries like `www.`.

Domains usually don't accept a CNAME entry for their top-level record. Instead use an A record, pointed to the IP address `35.232.226.111`.

### Verify Domain is Pointed

Use `Dig` to get DNS records from your current DNS Server.

``` sh
dig www.your-domain.com
# ANSWER SECTION:
# www.your-domain.com TTL IN CNAME domain-forwarder.g5dns.com.

dig your-domain.com
# ANSWER SECTION:
# your-domain.com TTL IN A 35.232.226.111
```

## Add a Domain to the Domains Table

1. Search that the domain doesn't already exist. _This is easiest to do using a SQL Query_.

``` sql
SELECT *
FROM public.domains
WHERE domain = 'www.the-domain-i-want-to-add.com';
```

> No results means it doesn't exist. Please continue.

2. Add the domain to the domains table. The `domain`, `createdAt`, and `updatedAt` fields are **required**. Set `createdAt` and `updatedAt` to today's date. Take note of the `id` that is created; you'll use it in the next step.

``` sql
INSERT INTO public.domains("domain", "createdAt", "updatedAt")
VALUES('my-new-domain.com', '2022-04-19', '2022-04-19')
RETURNING "id", "domain";
```
## Add the Redirect Rules to the Redirect Table

You can add multiple redirects for a single domain.

- The `domain_id` should equal the `id` from your added domain.
- The `path` field is from root. a `/` means the homepage.
- The `destination` is where the domain + path should end up.
- The `secure_destination` should be set to true. If you aren't doing this, you probably shouldn't be using this service for your redirect.
- The `wildcard` should be set to true, but I don't know what it does currently.

> Since you can add multiple redirects for the same domain, redirects may overlap or conflict. In general, your more specific redirects (like page-level) should come before more broad ones (site-wide).

``` sql
INSERT INTO public.redirects("domain_id", "path", "destination", "secure_destination", "wildcard", "createdAt", "updatedAt")
VALUES(45, '/', 'www.new-domain.com', TRUE, TRUE, '2022-04-19', '2022-04-19')
RETURNING "id";

```
You don't have to do this via SQL, but including just an option so you know which fields are required.

### Verify That Redirects are Working

The `domain_id` value plus `path` should arrive at the `destination` and can be tested in the browser.

``` sh
curl -vI https://<incoming_domain>/<redirect_path> 2>&1 | grep Location
```

## Troubleshooting

Since you will be modifying the database directly, you can break the whole thing if you aren't careful. For instance, do not redirect domains to themselves.

View the tables with a join.

``` sql
SELECT domain, path, destination
FROM redirects
INNER JOIN domains
ON redirects.domain_id = domains.id;
```


