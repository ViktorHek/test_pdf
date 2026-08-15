const artificer = {
    name: "gg",
    class: "Artificer",
    subclass: "Battle Smith",
    level: 4,
    pb: 2,
    alignment: 'Lawful good',
    proficiencies: {
        armor: ['light', 'medium', 'shields'],
        weapons: ['simple', 'martial'],
        tools: ['thieves', 'tinker', 'smith', 'painter', ''],
        languages: ['common', 'gnomish', 'dwarvish'],
        saving: ['con', 'int'],
        skills: ['investigation', 'insight', 'intimidation', 'sleight', 'perseption'],
        mastery: [],
        expertise: []
    },
    race: 'Shifter',
    size: 'Medium',
    speed: 35,
    age: 16,
    background: 'inquisitive',
    money: 16 + 50 - 25,
    hit_dice: 8,
    hp: 32,
    str: 8,
    dex: 12,
    con: 14,
    int: 15 + 2 + 1,
    wis: 10,
    cha: 13 + 1,
    feat: [
        {name: "", val: ""},
        {name: "Alert", val: "You gain the following benefits. \nInitiative Proficiency. When you roll Initiative, you can add your Proficiency Bonus to the roll. \nInitiative Swap. Immediately after you roll Initiative, you can swap your Initiative with the Initiative of one willing ally in the same combat. You can't make this swap if you or the ally has the Incapacitated condition."},
        {name: "Tools of the Trade", val: "Tool Proficiency. You gain proficiency with Smith’s Tools. If you already have this proficiency, you gain proficiency with one other type of Artisan’s Tools of your choice. \nWeapon Crafting. When you craft a nonmagical or magic weapon, the amount of time required to craft it is halved."},
        {name: "Tinker's magic", val: "As a Magic action while holding Tinker’s Tools, you can create one item in an unoccupied space within 5 feet of yourself, choosing the item from the following list: Ball Bearings, Flask, Pouch, Basket, Grappling Hook, Rope, Bedroll, Hunting Trap, Sack, Bell, Jug, Shovel, Blanket, Lamp, Spikes, Iron, Block and Tackle, Manacles, String, Bottle, Glass, Net, Tinderbox, Bucket, Oil, Torch, Caltrops, Paper, Vial, Candle, Parchment, , Crowbar, Pole"},
        {name: "Shifting - Swiftstride", val: "As a Bonus Action, you can shape-shift to assume a more bestial appearance. This transformation lasts for 1 minute or until you revert to your normal appearance as a Bonus Action. When you shift, you gain Temporary Hit Points equal to 2 times your Proficiency Bonus. You can shift a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest. While you are shifted, your Speed increases by 10 feet. Additionally, you can move up to 10 feet as a Reaction when a creature ends its turn within 5 feet of you. This reactive movement doesn’t provoke Opportunity Attack action."},
        {name: 'Darkvision', val: 'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.'},
        {name: 'Battle Ready', val: "Your combat training and your experiments with magic have paid off in two ways. \nArcane Empowerment. When you attack with a magic weapon, you can use your Intelligence modifier, instead of your Strength or Dexterity modifier, for the attack and damage rolls. \nWeapon Knowledge. You gain proficiency with Martial weapons. You can use a weapon with which you have proficiency as a Spellcasting Focus for your Artificer spells."},
        {name: 'Steel Defender', val: "Your tinkering has borne you a companion, a Steel Defender (see the stat block). You determine the defender’s appearance and whether it has two legs or four; your choices don’t affect the defender’s game statistics. \nThe defender is Friendly to you and your allies and obeys you. It vanishes if you die. \nThe Defender in Combat. In combat, the defender acts during your turn. It can move and take its Reaction on its own, but the only action it takes is the Dodge action unless you take a Bonus Action to command it to take an action. If you have the Incapacitated condition, the defender acts on its own and isn’t limited to the Dodge action. \nRestoring or Replacing the Defender. If the defender has died within the last hour, you can take a Magic action to touch it and expend a spell slot. The defender returns to life after 1 minute with all its Hit Points restored. \nWhenever you finish a Long Rest, you can create a new defender if you have Smith’s Tools in hand. If you already have a defender from this feature, the first one vanishes."},
        {name: 'Replicate Magic Item', val: "Plans Known. When you gain this feature, choose four plans to learn from the Magic Item Plans (Artificer Level 2+) table. Bag of Holding, Cap of Water Breathing, Sending Stones, and Wand of the War Mage are recommended. Whenever you gain an Artificer level, you can replace one of the plans you know with a new plan for which you qualify. \nYou learn another plan of your choice when you reach certain Artificer levels, as shown in the Plans Known column of the Artificer Features table. When you choose a plan to learn, you choose it from any Magic Item Plans table for which you qualify; your qualification is based on your Artificer level. \nCreating an Item. When you finish a Long Rest, you can create one or two different magic items if you have Tinker’s Tools in hand. Each item is based on one of the plans you know for this feature. \nIf a created item requires Attunement, you can attune yourself to it the instant you create it. If you decide to attune to the item later, you must do so using the normal process for Attunement. \nWhen you reach certain Artificer levels specified in the Magic Items column of the Artificer Features table, the number of magic items you can create at the end of a Long Rest increases. Each item you create must be based on a different plan you know. \nYou can’t have more magic items from this feature than the number shown in the Magic Items column of the Artificer Features table for your level. If you try to exceed your maximum number of magic items for this feature, the oldest item vanishes, and then the new item appears. \nDuration. A magic item created by this feature functions as the normal magic item, except its magic isn’t permanent; when you die, the magic item vanishes after 1d4 days. If you replace a plan you know with a new plan, any magic item created with the replaced plan immediately vanishes. \nIf an item that you created with this feature is a container, such as a Bag of Holding, and it vanishes, its contents harmlessly appear in and around its space. \nSpellcasting Focus. You can use any Wand or Weapon created by this feature as a Spellcasting Focus in lieu of using a set of Artisan’s Tools."},        
        {name: "Plan: Manifold Tool", val: "This tool takes the form of a wrench, a screwdriver, or another basic tool. As a Magic action, you can touch the item and transform it into a type of Artisan’s Tools of your choice. Whatever form the tool takes, you have proficiency with it when you use it."},
        {name: "Plan: Wand of the War Mage +1", val: "While holding this wand, you gain a bonus to spell attack rolls determined by the wand’s rarity. In addition, you ignore Half Cover when making a spell attack roll."},
        {name: "Plan: Repeating Shot", val: "Weapon (Any Simple or Martial with the Ammunition Property), Uncommon (Requires Attunement) \nThis magic weapon grants a +1 bonus to attack and damage rolls made with it when it’s used to make a ranged attack, and it ignores the Loading property if it has that property. If the weapon lacks ammunition, it produces its own, automatically creating one piece of magic ammunition when the wielder makes a ranged attack roll with it. The ammunition created by the weapon vanishes the instant after it hits or misses a target."},
        {name: "Plan: Alchemy Jug", val: "This ceramic jug appears to be able to hold a gallon of liquid and weighs 12 pounds whether full or empty. The jug sloshes when it is shaken, even if the jug is empty. You can take a Magic action and name one liquid from the Alchemy Jug Liquids table to cause the jug to produce the chosen liquid. Afterward, you can uncork the jug as a Utilize action and pour that liquid out, up to 2 gallons per minute. The maximum amount of liquid the jug can produce depends on the liquid you named. Once the jug starts producing a liquid, it can’t produce a different one, or more of one that has reached its maximum, until the next dawn. Acid 8 ounces, Basic Poison 4 ounces, Beer 4 gallons, Honey 1 gallon, Mayonnaise 2 gallons, Oil 1 quart, Vinegar 2 gallons, Water, fresh 8 gallons, Water, salt 12 gallons, Wine 1 gallon"},
    ],
    equipment: [
        {name: "", val: ""},
        {name: "Light Crossbow", val: "1d8 piercing. amunition, range(20/60; bolt), loading, two-handed. (slow)"},
        {name: "Dagger", val: "1d4 Piercing. Finesse, Light, Thrown (Range 20/60), Nick"},
        {name: "Dungeoneer’s Pack", val: ""},
        {name: "Tinker’s Tools", val: "Utilize: Assemble a Tiny item composed of scrap, which falls apart in 1 minute (DC 20). Craft: Musket, Pistol, Bell, Bullseye Lantern, Flask, Hooded Lantern, Hunting Trap, Lock, Manacles, Mirror, Shovel, Signal Whistle, Tinderbox"},
        {name: "Thieves’ Tools", val: "Utilize: Pick a lock (DC 15), or disarm a trap (DC 15)"},
        {name: "Studded Leather Armor", val: "+2 to AC"},
    ],
    spells: {
        slots: [3],
        cantrips: [
            {
                name: 'Mending', 
                casting_time: '1 min',
                range: 'touch',
                components: ['v', 's', 'm'],
                duration: 'instantaneous',
                val: ""
            },
        ],
        lv1: [
            {
                name: 'Heroism', 
                casting_time: '1 action',
                range: 'touch',
                components: ['v', 's'],
                duration: 'Concentration, up to 1 minute',
                val: "A willing creature you touch is imbued with bravery. Until the spell ends, the creature is immune to the Frightened condition and gains Temporary Hit Points equal to your spellcasting ability modifier at the start of each of its turns.",
                levels: "You can target one additional creature for each spell slot level above 1."
            },
            {
                name: 'Shield', 
                casting_time: 'Reaction, which you take when you are hit by an attack roll or targeted by the Magic Missile spell',
                range: 'self',
                components: ['v', 's'],
                duration: '1 round',
                val: "An imperceptible barrier of magical force protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from Magic Missile."
            },

        ]
    },
    familiar: {
        name: "Shiva",
        ac: 16,
        hp: 25,
        speed: "40 feet",
        pb: 2,
        str: 14,
        dex: 12,
        con: 14,
        int: 4,
        wis: 10,
        cha: 6,
        immunities: 'Poison; Charmed, Exhaustion, Poisoned',
        skills: [],
        senses: "Darkvision 60 feet, Passive Perseption 10",
        languages: "Understands the languages that you know",
        traits: [
            {name: "Steel Bond", val: "Add your Proficiency Bonus to any ability check or saving throw the Steel Defender makes."}
        ],
        actions: [
            {name: "Force-Empowered Rend", val: "Melee Attack Roll: Bonus equals your spell attack modifier, reach 5 ft. Hit: 1d8 + 2 plus your Intelligence modifier Force damage."},
            {name: "Repair (3/Day)", val: "The defender, or one Construct or object it can see within 5 feet of it, regains a number of Hit Points equal to 2d8 plus your Intelligence modifier."}
        ],
        reactions: [
            {name: "Deflect attack", val: "Trigger: A creature the defender can see within 5 feet of it makes an attack roll targeting a different creature. Response: The triggering creature makes the attack roll with Disadvantage."}
        ]
    },

}

export default artificer