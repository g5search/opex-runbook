# All Things Postgres

#### Postgres CLI

MacOS using [PostgresApp](https://postgresapp.com/documentation/cli-tools.html) will need to add commands to shell path. Run the following (requires admin user):

``` sh
sudo mkdir -p /etc/paths.d && echo /Applications/Postgres.app/Contents/Versions/latest/bin | sudo tee /etc/paths.d/postgresapp
```

#### Dump and Restore Databases from Remote Instances

Dump backup of `database_name` from Postgres instance.

``` sh
pg_dump -h localhost -p 5454 -U postgres -f dump.sql database_name
```

> You will be prompted for the password.

- `-f` is the output file name.
- `-h` is the host (alias, IP, or domain name).
- `-p` is the TCP port. Postgres' default is `5432`.
- `-U` is the database user. Default is `postgres`.
- last is the `database_name`.

Restore `database_name` from dump file.

``` sh
psql -f dump.sql database_name
```

You can reuse some of the flags when restoring if you need to restore to a remote database.
## Install Google Cloud SQL Auth Proxy

If you need to connect to remote instance with an app or a local client, you will need to install the Cloud SQL Proxy. This handles the authentication and attaches the database locally to a port of your choosing. The Proxy is only necessary when connecting to a GKE attached database or SQL instances without a public IP or hostname.

[Install Cloud SQL Proxy](https://cloud.google.com/sql/docs/mysql/sql-proxy)

> Alternatively you can use the G5 CLI to run the database proxy.

The Auth Proxy can authenticate through `gcloud`. You may need to reach out to DevOps to have a user created or updated with permissions for `Cloud SQL Editor`.

If you are managing a small number of database connections, you can use aliasing to simplify the connection commands.

```
./cloud_sql_proxy 



