const dedd = {
    name: "Dedd Valking",
    class: "Druid",
    subclass: "spores",
    level: 3,
    pb: 2,
    alignment: '',
    proficiencies: {
        armor: ['light', 'medium', 'shields', 'Not Metal'],
        weapons: ['simple'],
        tools: ['Herbalism', 'thieve'],
        languages: ['common', 'sylvan', 'druidic'],
        saving: ['int', 'wis'],
        skills: ['perseption', 'survival', 'deception', 'stealth'],
        mastery: [],
        expertise: []
    },
    background: 'Criminal',
    race: 'Plasmoid (ooze)',
    size: 'Medium',
    speed: 30,
    gold: 15,
    silver: 0,
    copper: 0,
    hit_dice: 8,
    hp: 13,
    str: 12,
    dex: 14,
    con: 13,
    int: 8,
    wis: 16,
    cha: 10,
    feat: [
        {name: "Symbiotic Entity", val: "Also at 2nd level, you gain the ability to channel magic into your spores. As an action, you can expend a use of your Wild Shape feature to awaken those spores, rather than transforming into a beast form, and you gain 4 temporary hit points for each level you have in this class. While this feature is active, you gain the following benefits: \nWhen you deal your Halo of Spores damage, roll the damage die a second time and add it to the total. \nYour melee weapon attacks deal an extra 1d6 necrotic damage to any target they hit. \nThese benefits last for 10 minutes, until you lose all these temporary hit points. or until you use your Wild Shape again."},
        {name: "Halo of Spores", val: "Starting at 2nd level, you are surrounded by invisible, necrotic spores that are harmless until you unleash them on a creature nearby. When a creature you can see moves into a space within 10 feet of you or starts its turn there, you can use your reaction to deal 1d4 necrotic damage to that creature unless it succeeds on a Constitution saving throw against your spell save DC. The necrotic damage increases to 1d6 at 6th level, 1d8 at 10th level, and 1d10 at 14th level."},
        {name: "Wild Shape", val: "Transform into cow"},
        {name: "Amorphous", val: "You can squeeze through a space as narrow as 1 inch wide, provided you are wearing and carrying nothing. You also have advantage on ability checks you make to initiate or escape a grapple."},
        {name: "Shape Self", val: "If you are not incapacitated, you can reshape your body to give yourself a head, one or two arms, one or two legs, and makeshift hands and feet, or you can revert to a limbless blob (no action required). As a bonus action, you can extrude a pseudopod that is up to 6 inches wide and 10 feet long or reabsorb it into your body. You can use this pseudopod to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour out the contents of a container. The pseudopod can't attack, activate magic items, or carry more than 10 pounds."},
        {name: "Natural Resilience", val: "You have resistance to acid and poison damage, and you have advantage on saving throws against being poisoned."},
        {name: "Hold Breath", val: "You can hold your breath for 1 hour."},
        {name: "Darkvision", val: "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray."},
    ],
    spells: {
        slots: [4,2],
        cantrips: [
            {
                name: 'Thorn Whip', 
                casting_time: '1 action',
                range: '30 feet',
                components: ['v', 's', 'm'],
                duration: 'Instantaneous',
                val: "You create a long, vine-like whip covered in thorns that lashes out at your command toward a creature in range. Make a melee spell attack against the target. If the attack hits, the creature takes 1d6 piercing damage, and if the creature is Large or smaller, you pull the creature up to 10 feet closer to you.",
                levels: "At Higher Levels. This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
            },
            {
                name: 'Mold Earth', 
                casting_time: '1 action',
                range: '30 feet',
                components: ['s'],
                duration: 'Instantaneous or 1 hour',
                val: "You choose a portion of dirt or stone that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways: \n* If you target an area of loose earth, you can instantaneously excavate it, move it along the ground, and deposit it up to 5 feet away. This movement doesn't have enough force to cause damage. \n* You cause shapes, colors, or both to appear on the dirt or stone, spelling out words, creating images, or shaping patterns. The changes last for 1 hour. \n* If the dirt or stone you target is on the ground, you cause it to become difficult terrain. Alternatively, you can cause the ground to become normal terrain if it is already difficult terrain. This change lasts for 1 hour. \nIf you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."
            },
            {
                name: 'Chill Touch', 
                casting_time: '1 action',
                range: '120 feet',
                components: ['v', 's'],
                duration: '1 round',
                val: "You create a ghostly, skeletal hand in the space of a creature within range. Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes 1d8 necrotic damage, and it can't regain hit points until the start of your next turn. Until then, the hand clings to the target. If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn.",
                levels: "At Higher Levels. This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
            },
        ],
        lv1: [
            {
                name: 'Earth Tremor', 
                casting_time: '1 action',
                range: 'self (10-foot radius)',
                components: ['v', 's'],
                duration: 'Instantaneous',
                val: "You cause a tremor in the ground in a 10-foot radius. Each creature other than you in that area must make a Dexterity saving throw. On a failed save, a creature takes 1d6 bludgeoning damage and is knocked prone. If the ground in that area is loose earth or stone, it becomes difficult terrain until cleared. \nAt Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
            },
            {
                name: 'Healing Word', 
                casting_time: '1 bonus action',
                range: '60 feet',
                components: ['v'],
                duration: 'Instantaneous',
                val: "A creature of your choice that you can see within range regains hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs. \nAt Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d4 for each slot level above 1st."
            },
        ],
        lv2: [
            {
                name: 'Barkskin', 
                casting_time: '1 action',
                range: 'touch',
                components: ['v', 's', 'm'],
                duration: 'Concentration, up to 1 hour',
                val: "You touch a willing creature. Until the spell ends, the target's skin has a rough, bark-like appearance, and the target's AC can't be less than 16, regardless of what kind of armor it is wearing."
            },
            {
                name: 'Gentle Repose', 
                casting_time: '1 action',
                range: 'touch',
                components: ['v', 's', 'm'],
                duration: '10 days',
                val: "You touch a corpse or other remains. For the duration, the target is protected from decay and can't become undead. The spell also effectively extends the time limit on raising the target from the dead, since days spent under the influence of this spell don't count against the time limit of spells such as raise dead."
            },
            {
                name: 'Blindness/Deafness', 
                casting_time: '1 action',
                range: '30 feet',
                components: ['v'],
                duration: '1 min',
                val: "You can blind or deafen a foe. Choose one creature that you can see within range to make a Constitution saving throw. If it fails, the target is either blinded or deafened (your choice) for the duration. At the end of each of its turns, the target can make a Constitution saving throw. On a success, the spell ends.",
                levels: "At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd."
            },
        ],
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
        {name: "Scimitar x 2", val: "1d6 piercing. Finesse, light"},
        {name: "Whip", val: "1d6 piercing. Finesse, reach"},
        {name: "Spear", val: "1d6 piercing. Thrown (20/60), versatile (1d8)"},
        {name: "Crowbar", val: ""},
        {name: "Black clothes", val: "The clothes cover the entire body and has a hood to cover the face"},
    ],
    story: {
        intro: "Dedd works as an exterminator for things that overpopulate. When a flower takes over a field and takes all the nutrition from the ground, Max kills the flower by his mere pressence. He has an unique condition where instead of swetting and pooping to remove exes waist. He sweat toxic spored that damages everything next to him.",
        background: "",
        personality: "",
        features: "An ooze is originaly gray but absobes color with dyes. Therefor Dedd mostly use black clothes that cover his entire body. His color is black and he looks like a shadow. He is always wearing his hood up and goes to great effort to not look like an ooze in public. He got long black 'hair' in two braids with a dagger attached to the end of both braids. An ooze has control over his entire body but Dedds 'hair' is so thin that he can only manage to do simple stuff like moving the hair away or towards his body."
    }
}

export default dedd