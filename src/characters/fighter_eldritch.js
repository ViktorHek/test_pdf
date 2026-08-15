const hugo = {
    name: "Hugo Von Sonson",
    class: "Wizard",
    subclass: "Transmutation",
    level: 3,
    pb: 2,
    alignment: 'Lawful good',
    proficiencies: {
        armor: [],
        weapons: ['simple'],
        tools: ['smith'],
        languages: ['common', 'dwarvish', 'elvish', 'deep speech'],
        saving: ['int', 'wis'],
        skills: ['arcana', 'history', 'investigation', 'medicine'],
        mastery: [],
        expertise: []
    },
    race: 'Dwarf',
    size: 'Medium',
    speed: 25,
    age: 500,
    background: 'Sage',
    gold: 25,
    silver: 5,
    copper: 0,
    hit_dice: 6,
    hp: 13,
    str: 14,
    dex: 13,
    con: 11,
    int: 15,
    wis: 11,
    cha: 10,
    feat: [
        {name: 'Researcher', val: "When you attempt to learn or recall a piece of lore, if you do not know that information, you often know where and from whom you can obtain it. Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or creature. Your DM might rule that the knowledge you seek is secreted away in an almost inaccessible place, or that it simply cannot be found. Unearthing the deepest secrets of the multiverse can require an adventure or even a whole campaign."},
        {name: "Dwarven Resilience", val: "You have advantage on saving throws against poison, and you have resistance against poison damage."},
        {name: "Stonecunning", val: "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus."},
        {name: "Arcane Recovery", val: "You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher. For example, if you're a 4th-level wizard, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level spell slot or two 1st-level spell slots."},
        {name: "Darkvision", val: "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."},
        {name: "Transmutation Savant", val: "Beginning when you select this school at 2nd level, the gold and time you must spend to copy a Transmutation spell into your spellbook is halved."},
        {name: "Minor Alchemy", val: "Starting at 2nd level when you select this school, you can temporarily alter the physical properties of one nonmagical object, changing it from one substance into another. You perform a special alchemical procedure on one object composed entirely of wood, stone (but not a gemstone), iron, copper, or silver, transforming it into a different one of those materials. For each 10 minutes you spend performing the procedure, you can transform up to 1 cubic foot of material. After 1 hour, or until you lose your concentration (as if you were concentrating on a spell), the material reverts to its original substance."},
        {name: "", val: ""},
    ],
    spells: {
        slots: [4,2],
        prepared: [],
        cantrips: [
            {
                name: 'Fire Bolt', 
                casting_time: '1 action',
                range: '120 feet',
                components: ['v', 's'],
                duration: 'instantaneous',
                val: "You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn't being worn or carried. \nAt Higher Levels. This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10)."
            },
        ],
        lv1: [],
        lv2: [],
        lv3: [],
        lv4: [],
        lv5: [],
        lv6: [],
        lv7: [],
        lv8: [],
        lv9: [],
        lv10: [],
    },
    equipment: [
        {name: "Spear", val: "1d6 piercing. Thrown (20/60), versatile (1d8)"},    
    ],
    story: {
        intro: "",
        background: "",
        personality: "",
        features: ""
    }

}

export default hugo