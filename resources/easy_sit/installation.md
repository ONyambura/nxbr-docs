---
icon: instalod
---

# Installation

* Download the resource from [Keymaster](https://keymaster.fivem.net/) or [CFX Portal](https://portal.cfx.re/assets/granted-assets)
* Unpack the resource [_n\_easysit_](https://nyambura.tebex.io/package/5687559) into your desired resources location.

>
> eg: data/resources/\[n]
>

* Insert Ace Permission. _Select one, group or steam nor license not both.. depends on your server configuration_

{% tabs %}
{% tab title="Group" %}
```csharp
add_ace group.admin n_easysit allow
```
{% endtab %}

{% tab title="Steam" %}
```csharp
add_ace identifier.steam:xxxxxxxxxxxxx "n_easysit" allow
```
{% endtab %}

{% tab title="License" %}
```csharp
add_ace identifier.license:xxxxxxxxxxxxx "n_easysit" allow
```
{% endtab %}
{% endtabs %}

* Database Installation

>
> **Execute the SQL Query you'll find inside our resource, into your database.**&#x20;
>
> _Without running the provided sql query, the resource wont work._
>
> SQL File: n\_easysit/n\_chairs.sql
>
> {% code overflow="wrap" %}
> ```sql
> DROP TABLE IF EXISTS `n_easysit`;
> CREATE TABLE `n_easysit`  (
>   `id` int NOT NULL AUTO_INCREMENT,
>   `data` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
>   PRIMARY KEY (`id`) USING BTREE
> ) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = DYNAMIC;
>
> SET FOREIGN_KEY_CHECKS = 1;
> ```
> {% endcode %}
>

* Start the resource on your _server.cfg_

>
> ensure n\_easysit
>
