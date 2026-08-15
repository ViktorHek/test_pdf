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
    armor: 0,
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
    ],
    spells: {
        slots: [4, 2],
        prepared: [],
        cantrips: [
            {
                name: 'Fire Bolt', 
                casting_time: '1 action',
                range: '120 feet',
                components: ['v', 's'],
                duration: 'instantaneous',
                val: "You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn't being worn or carried.",
                levels: "This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10)."
            },
            {
                name: 'Minor Illusion', 
                casting_time: '1 action',
                range: '30 feet',
                components: ['s', 'm'],
                duration: '1 min',
                val: "You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again. \nIf you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else's voice, a lion's roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the spell ends. \nIf you create an image of an object—such as a chair, muddy footprints, or a small chest—it must be no larger than a 5-foot cube. The image can't create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it to be an illusion, because things can pass through it. \nIf a creature uses its action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature."
            },
            {
                name: 'Shape Water', 
                casting_time: '1 action',
                range: '30 feet',
                components: ['s'],
                duration: 'instantaneous or 1 hour',
                val: "You choose an area of water that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways: \nYou instantaneously move or otherwise change the flow of the water as you direct, up to 5 feet in any direction. This movement doesn't have enough force to cause damage. \nYou cause the water to form into simple shapes and animate at your direction. This change lasts for 1 hour. \nYou change the water's color or opacity. The water must be changed in the same way throughout. This change lasts for 1 hour. \nYou freeze the water, provided that there are no creatures in it. The water unfreezes in 1 hour. \nIf you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."
            },
        ],
        lv1: [
            {
                name: "Disguise Self", 
                casting_time: '1 action',
                range: 'self',
                components: ['v', 's'],
                duration: '1 hour',
                val: "You make yourself - including your clothing, armor, weapons, and other belongings on your person - look different until the spell ends or until you use your action to dismiss it. You can seem 1 foot shorter or taller and can appear thin, fat, or in between. You can't change your body type, so you must adopt a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you. \nThe changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to your outfit, objects pass through the hat, and anyone who touches it would feel nothing or would feel your head and hair. If you use this spell to appear thinner than you are, the hand of someone who reaches out to touch you would bump into you while it was seemingly still in midair. To discern that you are disguised, a creature can use its action to inspect your appearance and must succeed on an Intelligence (Investigation) check against your spell save DC."
            },
            {
                name: "Find Familiar", 
                casting_time: '1 hour',
                range: '10 feet',
                components: ['v', 's', 'm(10gp)'],
                duration: 'Instantaneous',
                val: "You gain the service of a familiar, a spirit that takes an animal form you choose: bat, cat, crab, frog (toad), hawk, lizard, octopus, owl, poisonous snake, fish (quipper), rat, raven, sea horse, spider, or weasel. Appearing in an unoccupied space within range, the familiar has the statistics of the chosen form, though it is a celestial, fey, or fiend (your choice) instead of a beast. \nYour familiar acts independently of you, but it always obeys your commands. In combat, it rolls its own initiative and acts on its own turn. A familiar can't attack, but it can take other actions as normal. \nWhen the familiar drops to 0 hit points, it disappears, leaving behind no physical form. It reappears after you cast this spell again. As an action, you can temporarily dismiss your familiar to a pocket dimension. Alternatively, you can dismiss it forever. As an action while it is temporarily dismissed, you can cause it to reappear in any unoccupied space within 30 feet of you. Whenever the familiar drops to 0 hit points or disappears into the pocket dimension, it leaves behind in its space anything it was wearing or carrying. \nWhile your familiar is within 100 feet of you, you can communicate with it telepathically. Additionally, as an action, you can see through your familiar's eyes and hear what it hears until the start of your next turn, gaining the benefits of any special senses that the familiar has. During this time, you are deaf and blind with regard to your own senses. \nYou can't have more than one familiar at a time. If you cast this spell while you already have a familiar, you instead cause it to adopt a new form. Choose one of the forms from the above list. Your familiar transforms into the chosen creature. \nFinally, when you cast a spell with a range of touch, your familiar can deliver the spell as if it had cast the spell. Your familiar must be within 100 feet of you, and it must use its reaction to deliver the spell when you cast it. If the spell requires an attack roll, you use your attack modifier for the roll."
            },
            {
                name: "Ice Knife", 
                casting_time: '1 action',
                range: '60 feet',
                components: ['s', 'm'],
                duration: 'Instantaneous',
                val: "You create a shard of ice and fling it at one creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 piercing damage. Hit or miss, the shard then explodes. The target and each creature within 5 feet of the point where the ice exploded must succeed on a Dexterity saving throw or take 2d6 cold damage.",
                levels: "When you cast this spell using a spell slot of 2nd level or higher, the cold damage increases by 1d6 for each slot level above 1st."
            },
            {
                name: "Silvery Barbs", 
                casting_time: '1 reaction, which you take when a creature you can see within 60 feet of yourself succeeds on an attack roll, an ability check, or a saving throw',
                range: '60 feet',
                components: ['v'],
                duration: 'Instantaneous',
                val: "You magically distract the triggering creature and turn its momentary uncertainty into encouragement for another creature. The triggering creature must reroll the d20 and use the lower roll. \nYou can then choose a different creature you can see within range (you can choose yourself). The chosen creature has advantage on the next attack roll, ability check, or saving throw it makes within 1 minute. A creature can be empowered by only one use of this spell at a time."
            },
            {
                name: "Witch Bolt", 
                casting_time: '1 action',
                range: '30 feet',
                components: ['v', 's', 'm'],
                duration: 'Concentration, up to 1 minute',
                val: "A beam of crackling, blue energy lances out toward a creature within range, forming a sustained arc of lightning between you and the target. Make a ranged spell attack against that creature. On a hit, the target takes 1d12 lightning damage, and on each of your turns for the duration, you can use your action to deal 1d12 lightning damage to the target automatically. The spell ends if you use your action to do anything else. The spell also ends if the target is ever outside the spell's range or if it has total cover from you.",
                levels: "When you cast this spell using a spell slot of 2nd level or higher, the initial damage increases by 1d12 for each slot level above 1st."
            },
            {
                name: "Color Spray", 
                casting_time: '1 action',
                range: 'self (15-foot cone)',
                components: ['v', 's', 'm'],
                duration: '1 round',
                val: "A dazzling array of flashing, colored light springs from your hand. Roll 6d10, the total is how many hit points of creatures this spell can effect. Creatures in a 15-foot cone originating from you are affected in ascending order of their current hit points (ignoring unconscious creatures and creatures that can't see). \nStarting with the creature that has the lowest current hit points, each creature affected by this spell is blinded until the end of your next turn. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for the creature to be affected.",
                levels: "When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d10 for each slot level above 1st."
            },
        ],
        lv2: [
            {
                name: "Detect Thoughts", 
                casting_time: '1 action',
                range: 'self',
                components: ['v', 's', 'm'],
                duration: 'Concentration, up to 1 minute',
                val: "For the duration, you can read the thoughts of certain creatures. When you cast the spell and as your action on each turn until the spell ends, you can focus your mind on any one creature that you can see within 30 feet of you. If the creature you choose has an Intelligence of 3 or lower or doesn't speak any language, the creature is unaffected. \nYou initially learn the surface thoughts of the creature - what is most on its mind in that moment. As an action, you can either shift your attention to another creature's thoughts or attempt to probe deeper into the same creature's mind. If you probe deeper, the target must make a Wisdom saving throw. If it fails, you gain insight into its reasoning (if any), its emotional state, and something that looms large in its mind (such as something it worries over, loves, or hates). If it succeeds, the spell ends. Either way, the target knows that you are probing into its mind, and unless you shift your attention to another creature's thoughts, the creature can use its action on its turn to make an Intelligence check contested by your Intelligence check; if it succeeds, the spell ends. \nQuestions verbally directed at the target creature naturally shape the course of its thoughts, so this spell is particularly effective as part of an interrogation. \nYou can also use this spell to detect the presence of thinking creatures you can't see. When you cast the spell or as your action during the duration, you can search for thoughts within 30 feet of you. The spell can penetrate barriers, but 2 feet of rock, 2 inches of any metal other than lead, or a thin sheet of lead blocks you. You can't detect a creature with an Intelligence of 3 or lower or one that doesn't speak any language. \nOnce you detect the presence of a creature in this way, you can read its thoughts for the rest of the duration as described above, even if you can't see it, but it must still be within range."
            },
        ],
        lv3: [
            {
                name: "Animate Dead", 
                casting_time: '1 action',
                range: '10-foot',
                components: ['v', 's', 'm'],
                duration: 'Instantaneous',
                val: "This spell creates an undead servant. Choose a pile of bones or a corpse of a Medium or Small humanoid within range. Your spell imbues the target with a foul mimicry of life, raising it as an undead creature. The target becomes a skeleton if you chose bones or a zombie if you chose a corpse (the DM has the creature's game statistics). \nOn each of your turns, you can use a bonus action to mentally command any creature you made with this spell if the creature is within 60 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete. \nThe creature is under your control for 24 hours, after which it stops obeying any command you've given it. To maintain the control of the creature for another 24 hours, you must cast this spell on the creature again before the current 24-hour period ends. This use of the spell reasserts your control over up to four creatures you have animated with this spell, rather than animating a new one.",
                levels: "When you cast this spell using a spell slot of 4th level or higher, you animate or reassert control over two additional undead creatures for each slot level above 3rd. Each of the creatures must come from a different corpse or pile of bones."
            },
        ],
        lv4: [],
        lv5: [],
        lv6: [],
        lv7: [],
        lv8: [],
        lv9: [],
        lv10: [],
    },
    equipment: [
        {name: "Cell Key", val: "Key to prison cell. Has symbol to match door"},
        {name: "Lether armor", val: "Not wearing. not profisient"},
        {name: "Salt", val: ""},
        {name: "Human Skull", val: ""},
        {name: "Onix Gem", val: "unknone value"},
        {name: "Wand of Bone", val: "1 charge left. casting animate dead spell. Needs constitution saving trow, else the undead attack you"},
        {name: "Human Ashes", val: "From an guard I turned undead."},
        {name: "Human Flesh", val: "Taken from guard. can be used for animate undead."},
        {name: "Human Boandust", val: "Taken from guard. can be used for animate undead."},
        {name: "Human Blood in waterskin", val: "Taken from guard. can be used for animate undead."},
        {name: "Fine Shortsword", val: "Value: 10 gp. Damage: 1d6 piercing. Weight: 2 lb. Properties: Finesse, light"},
        {name: "5 Arrows", val: ""},
        {name: "Red potion", val: "Unknown effekt"},
        {name: "Rope 50", val: "50 feet normal rope"},
        {name: "quarts", val: "väldigt värdefull sten"},
        {name: "ink & Quill", val: ""},
        {name: "Dagger", val: "damage: 1d4 piercing. properties: Finesse, light, thrown (20/60)"},
        {name: "Books", val: "What is imortality? & story book & Grimoar"},
        {name: "Ring of transended life", val: "A ring that gives the user the fysical strenth and mental clarity they had 400 years ago. Needs atunment. The ring can not be removed by anyone exept the one wering it. If Hugo Von Sonson removes the ring, he dies."},
        {name: "Cigarets x 8", val: ""},
        {name: "Quaterstaff", val: "1d6 bludgeoning. versatile 1d8"},
        {name: "Tinderbox", val: "A Tinderbox is a small container holding flint, fire steel, and tinder (usually dry cloth soaked in light oil) used to kindle a fire. Using it to light a Candle, Lamp, Lantern, or Torch—or anything else with exposed fuel—takes a Bonus Action. Lighting any other fire takes 1 minute."},
        {name: "Torches x 10", val: ""},
        {name: "Food x 10", val: ""},
    ],
    familiar: {
        name: "Raven",
        ac: 12,
        hp: 1,
        speed: "10 feet, Fly 50 feet",
        pb: 2,
        str: 2,
        dex: 14,
        con: 8,
        int: 2,
        wis: 12,
        cha: 6,
        skills: ['perseption + 3'],
        senses: "Passive Perseption 13",
        languages: "",
        traits: [
            {name: "Mimicry", val: "The raven can mimic simple sounds it has heard, such as a person whispering, a baby crying, or an animal chittering. A creature that hears the sounds can tell they are imitations with a successful DC 10 Wisdom (Insight) check."}
        ],
        actions: [
            {name: "Beak", val: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 piercing damage."}
        ]
    },
    story: {
        intro: "",
        background: "",
        personality: "",
        features: ""
    }

}

export default hugo