# Crew Installer Scripts

Installer, lifecycle, and migration scripts for Crew and Crew Node.

## Install Crew

Docker and binary installers are intentionally separate.

Docker install:

```bash
curl -sL https://raw.githubusercontent.com/UnchartedAli/Crew/master/scripts/crew/crew.sh | sudo bash -s -- install
```

Binary install:

```bash
curl -sL https://raw.githubusercontent.com/UnchartedAli/Crew/master/scripts/crew/crew-binary.sh | sudo bash -s -- install
```

Binary mode installs the published Linux release asset for the current machine.

Do not run these installers with `sudo bash -c "$(curl ...)"`; the script body can exceed Linux's single-argument limit. Always pipe the download into bash as shown above.

Install the dev channel explicitly:

```bash
curl -sL https://raw.githubusercontent.com/UnchartedAli/Crew/master/scripts/crew/crew.sh | sudo bash -s -- install --dev
curl -sL https://raw.githubusercontent.com/UnchartedAli/Crew/master/scripts/crew/crew-binary.sh | sudo bash -s -- install --dev
```

Dockerized mode supports SQLite, MySQL, and MariaDB:

```bash
curl -sL https://raw.githubusercontent.com/UnchartedAli/Crew/master/scripts/crew/crew.sh | sudo bash -s -- install --database mysql
curl -sL https://raw.githubusercontent.com/UnchartedAli/Crew/master/scripts/crew/crew.sh | sudo bash -s -- install --database mariadb
```

Install a specific release:

```bash
curl -sL https://raw.githubusercontent.com/UnchartedAli/Crew/master/scripts/crew/crew.sh | sudo bash -s -- install --version v0.5.2
curl -sL https://raw.githubusercontent.com/UnchartedAli/Crew/master/scripts/crew/crew-binary.sh | sudo bash -s -- install --version v0.5.2
```

Update to the dev channel or a specific release:

```bash
sudo crew update --dev
sudo crew update --version v0.5.2
```

Update or change Xray-core:

```bash
sudo crew core-update
```

## Install Crew Node

Docker node install:

```bash
curl -sL https://raw.githubusercontent.com/UnchartedAli/Crew/master/scripts/crew/crew-node.sh | sudo bash -s -- install
curl -sL https://raw.githubusercontent.com/UnchartedAli/Crew/master/scripts/crew/crew-node.sh | sudo bash -s -- install --name crew-node2
```

Binary node install:

```bash
curl -sL https://raw.githubusercontent.com/UnchartedAli/Crew/master/scripts/crew/crew-node-binary.sh | sudo bash -s -- install
curl -sL https://raw.githubusercontent.com/UnchartedAli/Crew/master/scripts/crew/crew-node-binary.sh | sudo bash -s -- install --name crew-node2
```

Install only the node CLI:

```bash
curl -sL https://raw.githubusercontent.com/UnchartedAli/Crew/master/scripts/crew/crew-node.sh | sudo bash -s -- install-script
```

## Migration Helpers

Panel migration:

```bash
curl -sL https://raw.githubusercontent.com/UnchartedAli/Crew/master/scripts/crew/migrate_marzban_to_crew.sh | sudo bash -s --
```

Node migration:

```bash
curl -sL https://raw.githubusercontent.com/UnchartedAli/Crew/master/scripts/crew/migrate_marzban_node_to_crew.sh | sudo bash -s --
```

Back up compose files and databases before running migration scripts.
