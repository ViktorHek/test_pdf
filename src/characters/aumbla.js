const aumbla = {
    name: "Bink Starlek",
    class: "Ranger",
    subclass: "Beast Master",
    level: 4,
    pb: 2,
    alignment: 'Lawful good',
    proficiencies: {
        armor: ['Light', 'medium', 'shields'],
        weapons: ['simple', 'martial'],
        mastery: ['trident', 'whip'],
        tools: ['Carpenter', 'Cook'],
        languages: ['common', 'elvish', 'dwarvish'],
        saving: ['dex', 'wis'],
        skills: ['animal', 'nature', 'athletics', 'perception', 'survival', 'insight', 'medicine', 'persuasion'],
        expertise: ['animal']
    },
    race: 'Human',
    size: 'Medium',
    speed: 30,
    background: 'Farmer',
    gold: 22 + 150,
    silver: 0,
    copper: 0,
    hit_dice: 10,
    hp: 47,
    armor: 0,
    str: 15 + 1,
    dex: 12,
    con: 14 + 2,
    int: 10,
    wis: 13 + 1,
    cha: 8,
    feat: [
        {name: "Chef", val: "Ability Score Increase. Increase your Constitution or Wisdom score by 1, to a maximum of 20. \nCook's Utensils. You gain proficiency with Cook's Utensils if you don't already have it. \nReplenishing Meal. As part of a Short Rest, you can cook special food if you have ingredients and Cook's Utensils on hand. You can prepare enough of this food for a number of creatures equal to 4 plus your Proficiency Bonus. At the end of the Short Rest, any creature who eats the food and spends one or more Hit Dice to regain Hit Points regains an extra 1d8 Hit Points. \nBolstering Treats. With 1 hour of work or when you finish a Long Rest, you can cook a number of treats equal to your Proficiency Bonus if you have ingredients and Cook's Utensils on hand. These special treats last 8 hours after being made. A creature can use a Bonus Action to eat one of those treats to gain a number of Temporary Hit Points equal to your Proficiency Bonus."},
        {name: "Replenishing Meal", val: "As part of a Short Rest, you can cook special food if you have ingredients and Cook's Utensils on hand. You can prepare enough of this food for a number of creatures equal to 4 plus your Proficiency Bonus. At the end of the Short Rest, any creature who eats the food and spends one or more Hit Dice to regain Hit Points regains an extra 1d8 Hit Points."},
        {name: "Bolstering Treats", val: "With 1 hour of work or when you finish a Long Rest, you can cook a number of treats equal to your Proficiency Bonus if you have ingredients and Cook's Utensils on hand. These special treats last 8 hours after being made. A creature can use a Bonus Action to eat one of those treats to gain a number of Temporary Hit Points equal to your Proficiency Bonus."},
        {name: "Tough", val: "Your Hit Point maximum increases by an amount equal to twice your character level when you gain this feat. Whenever you gain a character level thereafter, your Hit Point maximum increases by an additional 2 Hit Points."},
        {name: "Resourceful", val: "You gain Heroic Inspiration whenever you finish a Long Rest"},
        {name: "Skilled", val: "You gain proficiency in any combination of three skills or tools of your choice. insight, medicine, persuasion"},
        {name: "Favored Enemy: Plants & Beasts", val: "You always have the Hunter's Mark spell prepared. \nYou can cast it twice without expending a spell slot, and you regain all expended uses of this ability when you finish a Long Rest. \nThe number of times you can cast the spell without a spell slot increases when you reach certain Ranger Levels, as shown in the Favored Enemy column of the Ranger Features table."},
        {name: "Weapon Mastery: Trident & Whip", val: "Your training with weapons allows you to use the mastery properties of two kinds of weapons of your choice with which you have proficiency, such as Longbows and Shortswords. \nWhenever you finish a Long Rest, you can change the kinds of weapons you chose. For Example, you could switch to using the mastery properties of Scimitars and Longswords."},
        {name: "Deft Explorer", val: "Thanks to your travels, you gain the following benefits. \nExpertise.: Choose one of your skill proficiencies with which you lack Expertise. You gain Expertise in that skill. \nLanguages.: You know two languages of your choice from the language tables in chapter 2."},
        {name: "Druidic Warrior", val: "You learn two Druid cantrips of your choice (See the Druid class's section for a list of Druid spells). Guidance and Starry Wisp are recommended. The chosen cantrips count as Ranger spells for you, and Wisdom is your spellcasting ability for them. Whenever you gain a Ranger level, you can replace one of these cantrips with another Druid cantrip."},
        {name: "Primal Companion", val: "You magically summon a primal beast, which draws strength from your bond with nature. Choose its stat block: Beast of the Land, Beast of the Sea or Beast of the Sky. You also determine the kind of animal it is, choosing a kind appropriate for the stat block. Whatever beast you choose, it bears primal markings indicating its supernatural origin. \nThe beast is Friendly to you and your allies and obeys your commands. It vanishes if you die. \nThe Beast in Combat. In Combat, the beast acts during your turn. It can move and use its Reaction on its own, but the only action it takes is the Dodge action unless you take a Bonus Action to command it to take an action in its stat block or some other action. You can also sacrifice one of your attacks when you take the Attack action to command the beast to take the Beast's Strike action. If you have the Incapacitated condition, the beast acts on its own and isn't limited to the dodge action. \nRestoring or Replacing the Beast. If the beast has died within the last hour, you can take a Magic action to touch it and expend a spell slot. The beast returns to life after 1 minute with all its Hit Points restored. \nWhenever you finish a Long Rest, you can summon a different primal beast, which appears in an unoccupied space within 5 feet of you. You choose its stat block and appearance. If you already have a beast from this feature, the old one vanishes when the new one appears."},
    ],
    spells: {
        slots: [3],
        prepared: [],
        cantrips: [
            {
                name: 'Guidance',
                casting_time: '1 action',
                range: 'Touch',
                components: ['v', 's'],
                duration: 'Concentration, up to 1 minutes',
                val: "You touch a willing creature and choose a skill. Until the spell ends, the creature adds 1d4 to any ability check using the chosen skill.",
            },
            {
                name: 'Elementalism',
                casting_time: '1 action',
                range: '30 feet',
                components: ['v', 's'],
                duration: 'instantaneous',
                val: "You exert control over the elements, creating one of the following effects within range. \n* Beckon Air. You create a breeze strong enough to ripple cloth, stir dust, rustle leaves, and close open doors and shutters, all in a 5-foot Cube. Doors and shutters being held open by someone or something aren’t affected. \n* Beckon Earth. You create a thin shroud of dust or sand that covers surfaces in a 5-foot-square area, or you cause a single word to appear in your handwriting in a patch of dirt or sand. \n* Beckon Fire. You create a thin cloud of harmless embers and colored, scented smoke in a 5-foot Cube. You choose the color and scent, and the embers can light candles, torches, or lamps in that area. The smoke’s scent lingers for 1 minute. \n* Beckon Water. You create a spray of cool mist that lightly dampens creatures and objects in a 5-foot Cube. Alternatively, you create 1 cup of clean water either in an open container or on a surface, and the water evaporates in 1 minute. \n* Sculpt Element. You cause dirt, sand, fire, smoke, mist, or water that can fit in a 1-foot Cube to assume a crude shape (such as that of a creature) for 1 hour.",
            },

        ],
        lv1: [
            {
                name: "Hunter's Mark",
                casting_time: '1 bonus action',
                range: '90 feet',
                components: ['v'],
                duration: 'Concentration, up to 1 hour',
                val: "You choose a creature you can see within range and mystically mark it as your quarry. Until the spell ends, you deal an extra 1d6 damage to the target whenever you hit it with a weapon attack, and you have advantage on any Wisdom (Perception) or Wisdom (Survival) check you make to find it. \nIf the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn of yours to mark a new creature.",
                levels: "When you cast this spell using a spell slot of 3rd or 4th level, you can maintain your concentration on the spell for up to 8 hours. When you use a spell slot of 5th level or higher, you can maintain your concentration on the spell for up to 24 hours."
            },
            {
                name: 'Animal Friendship',
                casting_time: '1 action',
                range: '30 feet',
                components: ['v', 's', 'm'],
                duration: '24 hours',
                val: "Target a Beast that you can see within range. The target must succeed on a Wisdom saving throw or have the Charmed condition for the duration. If you or one of your allies deals damage to the target, the spells ends. \nUsing a Higher-Level Spell Slot. You can target one additional Beast for each spell slot level above 1.",
            },
            {
                name: "Entangle",
                casting_time: '1 action',
                range: '90 feet',
                components: ['v s'],
                duration: 'Concentration, up to 1 min',
                val: "Grasping weeds and vines sprout from the ground in a 20-foot square starting from a point within range. For the duration, these plants turn the ground in the area into difficult terrain. A creature in the area when you cast the spell must succeed on a Strength saving throw or be restrained by the entangling plants until the spell ends. A creature restrained by the plants can use its action to make a Strength check against your spell save DC. On a success, it frees itself. When the spell ends, the conjured plants wilt away.",
            },
            {
                name: "Alarm",
                casting_time: '1 min or Ritual',
                range: '30 feet',
                components: ['v, s, m'],
                duration: '8 hour',
                val: "You set an alarm against intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot Cube. Until the spell ends, an alarm alerts you whenever a creature touches or enters the warded area. When you cast the spell, you can designate creatures that won’t set off the alarm. You also choose whether the alarm is audible or mental: \nAudible Alarm. The alarm produces the sound of a handbell for 10 seconds within 60 feet of the warded area. \nMental Alarm. You are alerted by a mental ping if you are within 1 mile of the warded area. This ping awakens you if you’re asleep.",
            },
            {
                name: "Detect Magic",
                casting_time: '1 action or ritual',
                range: 'self',
                components: ['v s'],
                duration: 'Concentration, up to 10 min',
                val: "For the duration, you sense the presence of magical effects within 30 feet of yourself. If you sense such effects, you can take the Magic action to see a faint aura around any visible creature or object in the area that bears the magic, and if an effect was created by a spell, you learn the spell's school of magic. \nThe spell is blocked by 1 foot of stone, dirt, or wood; 1 inch of metal; or a thin sheet of lead.",
            },
            {
                name: "Cure Wounds",
                casting_time: '1 action',
                range: 'Touch',
                components: ['v s'],
                duration: 'instantaneous',
                val: "A creature you touch regains a number of Hit Points equal to 2d8 plus your spellcasting ability modifier. \nUsing a Higher-Level Spell Slot. The healing increases by 2d8 for each spell slot level above 1.",
            },

        ],
        lv2: [],
        lv3: [],
        lv4: [],
        lv5: [],
        lv6: [],
        lv7: [],
        lv8: [],
        lv9: [],
        lv10: [],
        option: [
            {
                name: "Mending",
                casting_time: '1 min',
                range: 'Touch',
                components: ['v s m'],
                duration: 'Instantaneous',
                val: "This spell repairs a single break or tear in an object you touch, such as a broken chain link, two halves of a broken key, a torn cloak, or a leaking wineskin. As long as the break or tear is no larger than 1 foot in any dimension, you mend it, leaving no trace of the former damage. \nThis spell can physically repair a magic item, but it can’t restore magic to such an object.",
            },

        ]
    },
    equipment: [
        {name: "Pitchfork (trident)", val: "1d8 piercing. Thrown (20/60), versitile (1d10), (Topple)"},
        {name: "Whip", val: "1d4 Slashing. Finesse, Reach, (slow)"},
        {name: "Sickle", val: "1d4 slashing. light, (nick)"},
        {name: "Carpenter's tools", val: "Utilize: Seal or pry open a door or container (DC 20). \nCraft: Club, Greatclub, Quarterstaff, Barrel, Chest, Ladder, Pole, Portable Ram, Torch"},
        {name: "Cook's Utensils", val: "Utilize: Improve food’s flavor (DC 10), or detect spoiled or poisoned food (DC 15). \nCraft: Rations"},
        {name: "Healer's Kit", val: "This kit is a leather pouch containing bandages, salves, and splints. The kit has ten uses. As an action, you can expend one use of the kit to stabilize a creature that has 0 hit points, without needing to make a Wisdom (Medicine) check."},
        {name: "Iron Pot", val: ""},
        {name: "Shovel", val: ""},
        {name: "Travel Clothes", val: ""},
    ],
    familiar: {
        name: "Aumbla",
        ac: 15,
        hp: 25,
        speed: "40 feet, Climb 40 feet",
        pb: 2,
        str: 14,
        dex: 14,
        con: 15,
        int: 8,
        wis: 14,
        cha: 11,
        skills: ['perseption + 3'],
        senses: "Darkvision 60 feet, Passive Perseption 12",
        languages: "Understands the languages that you know",
        traits: [
            {name: "Primal Bond", val: "Add your Proficiency Bonus to any ability check or saving throw the beast makes."}
        ],
        actions: [
            {name: "Beast's Strike", val: "Melee Attack Roll: Bonus equals your spell attack modifier, reach 5 ft. Hit: 1d8 + 2 plus your Wisdom modifier Bludgeoning, Piercing, or Slashing damage (Your choice when you summon the beast). If the beast moved at least 20 feet straight toward the target before the hit, the target takes an extra 1d6 damage of the same type, and the target has the Prone condition if it is a Large or smaller creature."}
        ]
    },
    story: {
        intro: "",
        background: "",
        personality: "",
        features: ""
    }

}

export default aumbla