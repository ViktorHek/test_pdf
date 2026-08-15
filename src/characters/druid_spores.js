const hugo = {
    name: "Max Platinum",
    class: "Druid",
    subclass: "spores",
    level: 4,
    pb: 2,
    alignment: '',
    proficiencies: {
        armor: ['light', 'medium', 'shields', 'Not Metal'],
        weapons: ['simple', 'longsword', 'shortsword', 'shortbow', 'longbow'],
        tools: ['Herbalism', 'thieve'],
        languages: ['common', 'infernal', 'druidic'],
        saving: ['int', 'wis'],
        skills: ['insight', 'survival', 'deception', 'stealth'],
        mastery: [],
        expertise: []
    },
    background: 'Criminal',
    race: 'Plasmoid',
    size: 'Medium',
    speed: 30,
    gold: 0,
    silver: 0,
    copper: 0,
    armor: 1,
    hit_dice: 8,
    hp: 32,
    str: 12,
    dex: 15 + 1,
    con: 14 + 2,
    int: 10,
    wis: 13 + 1,
    cha: 8,
    feat: [
        {name: "", val: ""},
        {name: "Shape Self", val: "As an action, you can reshape your body to give yourself a head, one or two arms, one or two legs, and makeshift hands and feet, or you can revert to a limbless blob. While you have a humanlike shape, you can wear clothing and armor made for a Humanoid of your size. As a bonus action, you can extrude a pseudopod that is up to 6 inches wide and 10 feet long or reabsorb it into your body. As part of the same bonus action, you can use this pseudopod to manipulate an object, open or close a door or container, or pick up or set down a Tiny object. The pseudopod contains no sensory organs and can’t attack, activate magic items, or lift more than 10 pounds."},
        {name: "Natural Resilience", val: "You have resistance to acid and poison damage, and you have advantage on saving throws against being poisoned."},
        {name: "Hold Breath", val: "You can hold your breath for 1 hour."},
        {name: "Darkvision", val: "You can see in dim light within 60 feet of yourself as if it were bright light, and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray."},
        {name: "Amorphous", val: "You can squeeze through a space as narrow as 1 inch wide, provided you are wearing and carrying nothing. You also have advantage on ability checks you make to initiate or escape a grapple."},
        {name: "Slasher", val: "You've learned where to cut to have the greatest results, granting you the following benefits: * Increase your Strength or Dexterity by 1, to a maximum of 20. * Once per turn when you hit a creature with an attack that deals slashing damage, you can reduce the speed of the target by 10 feet until the start of your next turn. * When you score a critical hit that deals slashing damage to a creature, you grievously wound it. Until the start of your next turn, the target has disadvantage on all attack rolls."},
        // {name: "Durable", val: "Hardy and resilient, you gain the following benefits: * Increase your Constitution score by 1, to a maximum of 20. * When you roll a Hit Die to regain hit points, the minimum number of hit points you regain from the roll equals twice your Constitution modifier (minimum of 2)."},
        {name: "Symbiotic Entity", val: "Also at 2nd level, you gain the ability to channel magic into your spores. As an action, you can expend a use of your Wild Shape feature to awaken those spores, rather than transforming into a beast form, and you gain 4 temporary hit points for each level you have in this class. While this feature is active, you gain the following benefits: \nWhen you deal your Halo of Spores damage, roll the damage die a second time and add it to the total. \nYour melee weapon attacks deal an extra 1d6 necrotic damage to any target they hit. \nThese benefits last for 10 minutes, until you lose all these temporary hit points. or until you use your Wild Shape again."},
        {name: "Halo of Spores", val: "Starting at 2nd level, you are surrounded by invisible, necrotic spores that are harmless until you unleash them on a creature nearby. When a creature you can see moves into a space within 10 feet of you or starts its turn there, you can use your reaction to deal 1d4 necrotic damage to that creature unless it succeeds on a Constitution saving throw against your spell save DC. The necrotic damage increases to 1d6 at 6th level, 1d8 at 10th level, and 1d10 at 14th level."},
        {name: "Wild Shape", val: "Transform into cow. max CR 1/2"},
    ],
    spells: {
        slots: [4,2],
        cantrips: [
            {
                name: 'Infestation', 
                casting_tiime: '1 action',
                range: '30 feet',
                components: ['v', 's', 'm'],
                duration: 'Instantaneous',
                val: "You cause a cloud of mites, fleas, and other parasites to appear momentarily on one creature you can see within range. The target must succeed on a Constitution saving throw, or it takes 1d6 poison damage and moves 5 feet in a random direction if it can move and its speed is at least 5 feet. Roll a d4 for the direction: 1, north; 2, south; 3, east; or 4, west. This movement doesn’t provoke opportunity attacks, and if the direction rolled is blocked, the target doesn't move.",
                levels: "The spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
            },
            {
                name: 'Thorn Whip', 
                casting_tiime: '1 action',
                range: '30 feet',
                components: ['v', 's', 'm'],
                duration: 'Instantaneous',
                val: "You create a long, vine-like whip covered in thorns that lashes out at your command toward a creature in range. Make a melee spell attack against the target. If the attack hits, the creature takes 1d6 piercing damage, and if the creature is Large or smaller, you pull the creature up to 10 feet closer to you. \nAt Higher Levels. This spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
            },
            {
                name: 'Mold Earth', 
                casting_tiime: '1 action',
                range: '30 feet',
                components: ['s'],
                duration: 'Instantaneous or 1 hour',
                val: "You choose a portion of dirt or stone that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways: \n* If you target an area of loose earth, you can instantaneously excavate it, move it along the ground, and deposit it up to 5 feet away. This movement doesn’t have enough force to cause damage. \n* You cause shapes, colors, or both to appear on the dirt or stone, spelling out words, creating images, or shaping patterns. The changes last for 1 hour. \n* If the dirt or stone you target is on the ground, you cause it to become difficult terrain. Alternatively, you can cause the ground to become normal terrain if it is already difficult terrain. This change lasts for 1 hour. \nIf you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."
            },
            {
                name: 'Chill Touch', 
                casting_tiime: '1 action',
                range: '120 feet',
                components: ['v', 's'],
                duration: '1 round',
                val: "You create a ghostly, skeletal hand in the space of a creature within range. Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes 1d8 necrotic damage, and it can’t regain hit points until the start of your next turn. Until then, the hand clings to the target. If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn. \nAt Higher Levels. This spell’s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
            },
        ],
        lv1: [
            {
                name: 'Earth Tremor', 
                casting_tiime: '1 action',
                range: 'self (10-foot radius)',
                components: ['v', 's'],
                duration: 'Instantaneous',
                val: "You cause a tremor in the ground in a 10-foot radius. Each creature other than you in that area must make a Dexterity saving throw. On a failed save, a creature takes 1d6 bludgeoning damage and is knocked prone. If the ground in that area is loose earth or stone, it becomes difficult terrain until cleared.",
                levels: "At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
            },
            {
                name: 'Protection from Evil and Good', 
                casting_tiime: '1 action',
                range: 'Touch',
                components: ['v', 's', 'm (holy water)'],
                duration: 'Concentration, up to 10 minutes',
                val: "Until the spell ends, one willing creature you touch is protected against certain types of creatures: aberrations, celestials, elementals, fey, fiends, and undead. \nThe protection grants several benefits. Creatures of those types have disadvantage on attack rolls against the target. The target also can't be charmed, frightened, or possessed by them. If the target is already charmed, frightened, or possessed by such a creature, the target has advantage on any new saving throw against the relevant effect.",
                levels: ""
            },
            {
                name: 'Absorb Elements', 
                casting_tiime: '1 reaction, which you take when you take acid, cold, fire, lightning, or thunder damage',
                range: 'Self',
                components: ['s'],
                duration: '1 round',
                val: "The spell captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack. You have resistance to the triggering damage type until the start of your next turn. Also, the first time you hit with a melee attack on your next turn, the target takes an extra 1d6 damage of the triggering type, and the spell ends.",
                levels: "When you cast this spell using a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each slot level above 1st."
            },
        ],
        lv2: [
            {
                name: 'Hold Person', 
                casting_tiime: '1 action',
                range: '60 feet',
                components: ['v', 's', 'm'],
                duration: 'Concentration, up to 1 min',
                val: "Choose a humanoid that you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target.",
                levels: "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional humanoid for each slot level above 2nd. The humanoids must be within 30 feet of each other when you target them."
            },
            {
                name: 'Summon Beast', 
                casting_tiime: '1 action',
                range: '90 feet',
                components: ['v', 's', 'm (200gp)'],
                duration: 'Concentration, up to 1 hour',
                val: "You call forth a bestial spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Bestial Spirit stat block. When you cast the spell, choose an environment: Air, Land, or Water. The creature resembles an animal of your choice that is native to the chosen environment, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends. \nThe creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don’t issue any, it takes the Dodge action and uses its move to avoid danger."
            },
            {
                name: 'Barkskin', 
                casting_tiime: '1 action',
                range: 'touch',
                components: ['v', 's', 'm'],
                duration: 'Concentration, up to 1 hour',
                val: "You touch a willing creature. Until the spell ends, the target’s skin has a rough, bark-like appearance, and the target’s AC can’t be less than 16, regardless of what kind of armor it is wearing."
            },
            {
                name: 'Gentle Repose', 
                casting_tiime: '1 action',
                range: 'touch',
                components: ['v', 's', 'm'],
                duration: '10 days',
                val: "You touch a corpse or other remains. For the duration, the target is protected from decay and can't become undead. The spell also effectively extends the time limit on raising the target from the dead, since days spent under the influence of this spell don’t count against the time limit of spells such as raise dead."
            },
            {
                name: 'Blindness/Deafness', 
                casting_tiime: '1 action',
                range: '30 feet',
                components: ['v'],
                duration: '1 min',
                val: "You can blind or deafen a foe. Choose one creature that you can see within range to make a Constitution saving throw. If it fails, the target is either blinded or deafened (your choice) for the duration. At the end of each of its turns, the target can make a Constitution saving throw. On a success, the spell ends. \nAt Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd."
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
        {name: "Leather Armor", val: "+1 to AC"},
        {name: "explorer's pack", val: "Includes a backpack, a bedroll, a mess kit, a tinderbox, 10 torches, 10 days of rations, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it."},
        {name: "druidic focus", val: "A Crusefix"},

        // {name: "Whip", val: "1d6 piercing. Finesse, reach"},
        // {name: "Spear", val: "1d6 piercing. Thrown (20/60), versatile (1d8)"},
    ]
}

export default hugo