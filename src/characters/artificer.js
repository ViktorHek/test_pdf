const artificer = {
    name: "Axel Havoc",
    class: "Artificer",
    subclass: "Battle Smith",
    level: 4,
    pb: 2,
    alignment: 'Lawful good',
    proficiencies: {
        armor: ['light', 'medium', 'shields'],
        weapons: ['simple', 'martial'],
        tools: ['thieves', 'tinker', 'smith', 'woodcarver', 'painter'],
        languages: ['common', 'gnomish', 'dwarvish'],
        saving: ['con', 'int'],
        skills: ['insight', 'persuasion', 'perception', 'stealth', 'sleight', 'investigation'],
        mastery: [],
        expertise: []
    },
    race: 'Tabaxi',
    size: 'Medium',
    speed: 35,
    age: 16,
    background: 'Guild Artisan',
    money: 15,
    equipment: ['tinker tools', 'recomendation letter from baytopia', 'common clothes'],
    hit_dice: 8,
    hp: 32,
    str: 10,
    dex: 13,
    con: 16,
    int: 18,
    wis: 8,
    cha: 12,
    feat: [
        {name: 'Cat Claws', val: 'You can use your claws to make unarmed strikes. When you hit with them, the strike deals 1d6 + your Strength modifier slashing damage, instead of the bludgeoning damage normal for an unarmed strike.'},
        {name: 'Cat Talet', val: 'You have proficiency in the Perception and Stealth skills.'},
        {name: 'Darkvision', val: 'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.'},
        {name: 'feline agility', val: "Your reflexes and agility allow you to move with a burst of speed. When you move on your turn in combat, you can double your speed until the end of the turn. Once you use this trait, you can't use it again until you move 0 feet on one of your turns."},
        {name: 'Battle Ready', val: 'When you attack with a magic weapon, you can use your Intelligence modifier, instead of Strength or Dexterity modifier, for the attack and damage rolls.'},
        {name: 'Steel Defender', val: "By 3rd level, your tinkering has borne you a faithful companion, a steel defender. It's friendly to you and your companions, and it obeys your commands. See its game statistics in the Steel Defender stat block, which uses your proficiency bonus (PB) in several places. You determine the creature's appearance and whether it has two legs or four; your choice has no effect on its game statistics. In combat, the defender shares your initiative count, but it takes its turn immediately after yours. It can move and use its reaction on its own, but the only action it takes on its turn is the Dodge action, unless you take a bonus action on your turn to command it to take another action. That action can be one in its stat block or some other action. If you are incapacitated, the defender can take any action of its choice, not just Dodge. If the Mending spell is cast on it, it regains 2d6 hit points. If it has died within the last hour, you can use your smith's tools as an action to revive it, provided you are within 5 feet of it and you expend a spell slot of 1st level or higher. The steel defender returns to life after 1 minute with all its hit points restored. At the end of a long rest, you can create a new steel defender if you have smith's tools with you. If you already have a defender from this feature, the first one immediately perishes. The defender also perishes if you die."},
        {name: 'Magical Tinkering', val: "At 1st level, you've learned how to invest a spark of magic into mundane objects. To use this ability, you must have thieves' tools or artisan's tools in hand. You then touch a Tiny nonmagical object as an action and give it one of the following magical properties of your choice. a) The object sheds bright light in a 5-foot radius and dim light for an additional 5 feet. b) Whenever tapped by a creature, the object emits a recorded message that can be heard up to 10 feet away. You utter the message when you bestow this property on the object, and the recording can be no more than 6 seconds long. c) The object continuously emits your choice of an odor or a nonverbal sound (wind, waves, chirping, or the like). The chosen phenomenon is perceivable up to 10 feet away. c) A static visual effect appears on one of the object's surfaces. This effect can be a picture, up to 25 words of text, lines and shapes, or a mixture of these elements, as you like. The chosen property lasts indefinitely. As an action, you can touch the object and end the property early. You can bestow magic on multiple objects, touching one object each time you use this feature, though a single object can only bear one property at a time. The maximum number of objects you can affect with this feature at one time is equal to your Intelligence modifier (minimum of one object). If you try to exceed your maximum, the oldest property immediately ends, and then the new property applies."},
        {name: 'Infusions', val: "Whenever you finish a long rest, you can touch a nonmagical object and imbue it with one of your artificer infusions, turning it into a magic item. An infusion works on only certain kinds of objects, as specified in the infusion's description. If the item requires attunement, you can attune yourself to it the instant you infuse the item. If you decide to attune to the item later, you must do so using the normal process for attunement (see the attunement rules in the Dungeon Master's Guide). Your infusion remains in an item indefinitely, but when you die, the infusion vanishes after a number of days equal to your Intelligence modifier (minimum of 1 day). The infusion also vanishes if you replace your knowledge of the infusion. You can infuse more than one nonmagical object at the end of a long rest; the maximum number of objects appears in the Infused Items column of the Artificer table. You must touch each of the objects, and each of your infusions can be in only one object at a time. Moreover, no object can bear more than one of your infusions at a time. If you try to exceed your maximum number of infusions, the oldest infusion ends, and then the new infusion applies. If an infusion ends on an item that contains other things, like a bag of holding, its contents harmlessly appear in and around its space."},
        {name: "Armor of Tools", val: "As an action, a creature wearing this infused armor can integrate into it artisan's tools or thieves' tools. The tools remain integrated in the armor for 8 hours or until the wearer removes the tools as an action. The armor can have only one tool integrated at a time. The wearer can add its Intelligence modifier to any ability checks it makes with the integrated tool. The wearer must have a hand free to use the tool."},
        {name: "Homunculus Servant", val: "You learn intricate methods for magically creating a special homunculus that serves you. The item you infuse serves as the creature's heart, around which the creature's body instantly forms. You determine the homunculus's appearance. Some artificers prefer mechanical-looking birds, whereas some like winged vials or miniature, animate cauldrons. The homunculus is friendly to you and your companions, and it obeys your commands. See this creature's game statistics in the Homunculus Servant stat block, which uses your proficiency bonus (PB) in several places. In combat, the homunculus shares your initiative count, but it takes its turn immediately after yours. It can move and use its reaction on its own, but the only action it takes on its turn is the Dodge action, unless you take a bonus action on your turn to command it to take another action. That action can be one in its stat block or some other action. If you are incapacitated, the homunculus can take any action of its choice, not just Dodge. The homunculus regains 2d6 hit points if the mending spell is cast on it. If you or the homunculus dies, it vanishes, leaving its heart in its space."},
        {name: "Repeating Shot", val: "This magic weapon grants a +1 bonus to attack and damage rolls made with it when it's used to make a ranged attack, and it ignores the loading property if it has it. If the weapon lacks ammunition, it produces its own, automatically creating one piece of magic ammunition when the wielder makes a ranged attack with it. The ammunition created by the weapon vanishes the instant after it hits or misses a target."},
        {name: "Alchemy Jug", val: "This ceramic jug appears to be able to hold a gallon of liquid and weighs 12 pounds whether full or empty. Sloshing sounds can be heard from within the jug when it is shaken, even if the jug is empty. You can use an action and name one liquid from the table below to cause the jug to produce the chosen liquid. Afterward, you can uncork the jug as an action and pour that liquid out, up to 2 gallons per minute. The maximum amount of liquid the jug can produce depends on the liquid you named. Once the jug starts producing a liquid, it can't produce a different one, or more of one that has reached its maximum, until the next dawn. Acid 8 ounces, basic poison "},
    ],
    spells: {
        slots: [2,1],
        cantrips: [
            {
                name: 'Mending', 
                casting_time: '1 min',
                range: 'touch',
                components: ['v', 's', 'm'],
                duration: 'instantaneous',
                val: "This spell repairs a single break or tear in an object you touch, such as a broken chain link, two halves of a broken key, a torn cloak, or a leaking wineskin. As long as the break or tear is no larger than 1 foot in any dimension, you mend it, leaving no trace of the former damage. This spell can physically repair a magic item or construct, but the spell can't restore magic to such an object."
            },
            {
                name: 'Thunderclap', 
                casting_time: '1 action',
                range: 'Self (5-foot radius',
                components: ['s'],
                duration: 'instantaneous',
                val: "You create a burst of thunderous sound, which can be heard 100 feet away. Each creature other than you within 5 feet of you must make a Constitution saving throw. On a failed save, the creature takes 1d6 thunder damage. At Higher Levels. The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
            }
        ],
        lv1: [
            {
                name: "Heroism", 
                casting_time: '1 action',
                range: 'touch',
                components: ['v', 's'],
                duration: 'concentration, up to 1 min',
                val: "A willing creature you touch is imbued with bravery. Until the spell ends, the creature is immune to being frightened and gains temporary hit points equal to your spellcasting ability modifier at the start of each of its turns. When the spell ends, the target loses any remaining temporary hit points from this spell. At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st."
            },
            {
                name: "Shield", 
                casting_time: '1 reaction, which you take when you are hit by an attack or targeted by the magic missile spell',
                range: 'self',
                components: ['v', 's'],
                duration: 'instantaneous',
                val: "An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from magic missile."
            },
            {
                name: "Arcane Weapon", 
                casting_time: '1 bonus action',
                range: 'self',
                components: ['v', 's'],
                duration: 'concentration, up to 1 hour',
                val: "You channel arcane energy into one simple or martial weapon you're holding, and choose one damage type: acid, cold, fire, lightning, poison, or thunder. Until the spell ends, you deal an extra 1d6 damage of the chosen type to any target you hit with the weapon. If the weapon isn't magical, it becomes a magic weapon for the spell's duration. As a bonus action, you can change the damage type, choosing from the options above. At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, you can maintain your concentration on the spell for up to 8 hours."
            },
            {
                name: "Tasha's Caustic Brew", 
                casting_time: '1 action',
                range: 'self (30-foot line)',
                components: ['v', 's', 'm'],
                duration: 'concentration, up to 1 hour',
                val: "A stream of acid emanates from you in a line 30 feet long and 5 feet wide in a direction you choose. Each creature in the line must succeed on a Dexterity saving throw or be covered in acid for the spell's duration or until a creature uses its action to scrape or wash the acid off itself or another creature. A creature covered in the acid takes 2d4 acid damage at the start of each of its turns. At Higher Levels. When you cast this spell using a spell slot 2nd level or higher, the damage increases by 2d4 for each slot level above 1st."
            },
            {
                name: "Grease", 
                casting_time: '1 action',
                range: '60 feet',
                components: ['v', 's', 'm'],
                duration: '1 min',
                val: "A stream of acid emanates from you in a line 30 feet long and 5 feet wide in a direction you choose. Each creature in the line must succeed on a Dexterity saving throw or be covered in acid for the spell's duration or until a creature uses its action to scrape or wash the acid off itself or another creature. A creature covered in the acid takes 2d4 acid damage at the start of each of its turns. At Higher Levels. When you cast this spell using a spell slot 2nd level or higher, the damage increases by 2d4 for each slot level above 1st."
            },

        ]
    }
}

export default artificer