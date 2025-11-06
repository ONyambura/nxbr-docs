---
description: Here you can see all your update history
icon: calendar-lines-pen
---

# Updates

>
> Version 1.0.0
>
> <sub>_Initial release_</sub>
>

>
> Version 1.2
>
> * _Reworked ace perms, now we bind it to group not to person (more cfg files)_&#x20;
> * _Reworked client side, no more 'confirm' needed on the removal, just submit or cancel (test button from removal has been there by mistake, removed.)_
> * _Test button while creating a new location works now, it closes the menu and 2 seconds later it brings it back to continue._
> * _Added Language options, now you can translate completly the resource on your preffered language. (n\_easysit/translations/en.lua) . You can create your\_language.lua , setting its name on the top and changing it at Config file (currently it is set 'en')._
> * _Added new option on the config, to change the Standup hotkey. Currently set to "BACK" means "BACKSPACE"._
> * _Animation list to select before sitting on the chair._
> * _Option to add lie location._
>

>
> **Version 1.3**
>
> * _Hotfix where sometimes getting error for (Invalud Lua type in \_\_data > TaskGoStraightTooCoord)._
>

>
> **Version 1.4**
>
> * _Added new configurable option to select the sit scenario (animation) you like to put while creation. Bellow you can see the new configurable option. "animations"_
>
> ```lua
> Config = {
>    command  = '~nchairs', -- register the command name you would like to use for the creator.
>    checkVersion = true, -- check if there's new version of the resource, you can disable it but you wont be informed if there's new version.
>    standup = "BACK", -- button to standup.
>    lang = "en", -- language, depends on your en.lua files.
>    animations = {
>       {label = "Sit on chair", args = "PROP_HUMAN_SEAT_CHAIR_MP_PLAYER"},
>       {label = "Sun Lounger", args = "PROP_HUMAN_SEAT_SUNLOUNGER"},
>
>       -- Get more scenarios at (https://wiki.rage.mp/index.php?title=Scenarios)
>    }
> }
> ```
>

>
> **Version 1.4.1**
>
> * _Hotfix for the servers who already had chairs without a config list (id), all those chairs will continue to use ID 1 means the first configurable chair anim_
>

>
> Version 1.5
>
> * **Updated Easy Sit to work with latest version of ox\_target.**
> * **New Configurable option (target) accepts 'qb', 'ox', 'q' (use ox option instead of q or qbx).**
>
> ```lua
> Config = {
>    command  = '~nchairs', -- register the command name you would like to use for the creator.
>    checkVersion = true, -- check if there's new version of the resource, you can disable it but you wont be informed if there's new version.
>    standup = "BACK", -- button to standup.
>    lang = "en", -- language, depends on your en.lua files.
>    target = "qb",      -- "qb", "q", "ox" | (ox supports both qbx-target/q-target) <<<< New Option
>    animations = {
>       {label = "Sit on chair", args = "PROP_HUMAN_SEAT_CHAIR_MP_PLAYER"},
>       {label = "Sun Lounger", args = "PROP_HUMAN_SEAT_SUNLOUNGER"},
>
>       -- Get more scenarios at (https://wiki.rage.mp/index.php?title=Scenarios)
>    }
> }
> ```
>

>
> **Version 1.6**
>
> * _New configurable option for args._
> * _**Update Files:**_ _`client/main.lua` , `./core.lua`, `./config.lua`_
> * _Replace client & core, modify your config.lua with the given bellow_
> * _**args** can be `string "scenario_name" or object {animation options you'll see as example bellow}`_
> * _**extraZ** Option only for animations, it will adjust the animation height (z position) minus or non minus. Please read the configurable file_
>
> ```lua
> Config = {
>    command  = '~nchairs', -- register the command name you would like to use for the creator.
>    checkVersion = true, -- check if there's new version of the resource, you can disable it but you wont be informed if there's new version.
>    standup = "BACK", -- button to standup.
>    lang = "en", -- language, depends on your en.lua files.
>    target = "ox",      -- "qb", "q", "ox" | (ox supports both qbx-target/q-target)
>    animations = {
>       {label = "Sit on chair (Scenario)", args = "PROP_HUMAN_SEAT_CHAIR_MP_PLAYER"},
>       {label = "Sunbathe Back (Scenario)", args = "WORLD_HUMAN_SUNBATHE_BACK"},
>       {label = "Lay On Bed (Anim)", args = {dict = "anim@gangops@morgue@table@", anim = "body_search", opts = {8.0, -8.0, -1, 1, 1, false, false, false}}},
>       {label = "Sit thinking (Anim)", args = {dict = "missheist_jewelleadinout", anim = "jh_int_outro_loop_a", extraZ = -0.9 --[[Can be -1 or 1]], opts = {8.0, -8.0, -1, 1, 1, false, false, false}}},
>       -- extraZ , will adjust the height (z) position of the ped location (not target) , since some animations are glitchy and it appears on air.
>       -- if your animation/scenario works perfect by default, then you can use extraZ = 0 , or remove it from the object. like the others you'll see on the config
>    }
> }
> ```
>
> * _**tip:** if you're facing issues with scenarios on beds , please use animation method. it's a game bug when you're using some scenarios an touching object(s) , it being canceled_
>
> ```lua
> opts = {} on anim object is the options for 
>     blendInSpeed --[[ number ]], 
>     blendOutSpeed --[[ number ]], 
>     duration --[[ integer ]], 
>     flag --[[ integer ]], 
>     playbackRate --[[ number ]], 
>     lockX --[[ boolean ]], 
>     lockY --[[ boolean ]], 
>     lockZ --[[ boolean ]]
> ```
>
