import { useState, useEffect } from "react";

function Inputs({ char, click }) {
    const [hp, setHp] = useState(char.hp);
    const [tempHp, setTempHp] = useState(0);
    const [spellSlots, setSpellSlots] = useState(char.spells.slots);

    useEffect(() => {
        setHp(char.hp);
        setSpellSlots(char.spells.slots);
    }, [char])

    function handleSlots(levels, isPlus) {
        const slots = spellSlots.map((val, i) => {
            if (i === levels - 1) return val += isPlus ? 1 : -1;
            return val
        })
        setSpellSlots(slots);
    }

    return (
        <div className="inputs-container">
            {/* Top */}
            <div id="name" className="input">
                {char.name}
            </div>
            <div id="class" className="input start">
                {char.class} {char.subclass}
            </div>
            <div id="background" className="input start">
                {char.background}
            </div>
            <div id="player" className="input start">
                Viktor
            </div>
            <div id="race" className="input start">
                {char.race}
            </div>
            <div id="alignment" className="input start">
                Lv {char.level}
            </div>
            <div id="exp" className="input start">
                0
            </div>
            {/* HP */}
            <div id="inspiration" className="input">
                <button onClick={() => click("gg", "ff")}>gg</button>
            </div>
            <div id="pb" className="input big">
                {char.pb}
            </div>
            <div id="initiative" className="input big">
                0
            </div>
            <div id="speed" className="input big">
                {char.speed}
            </div>
            <div id="max_hp" className="input">
                {char.hp}
            </div>
            <div id="current_hp" className="input big">
                <button className="click" onClick={() => setHp(hp - 1)}>
                    -
                </button>
                {hp}
                <button className="click" onClick={() => setHp(hp + 1)}>
                    +
                </button>
            </div>
            <div id="temp_hp" className="input big">
                <button className="click" onClick={() => setTempHp(tempHp - 1)}>
                    -
                </button>
                {tempHp}
                <button className="click" onClick={() => setTempHp(tempHp + 1)}>
                    +
                </button>
            </div>
            <div id="max_hp2" className="input">
                {char.hp}
            </div>
            <div id="hit_dice" className="input big">
                1d{char.hit_dice}
            </div>
            <input type="checkbox" id="dss1" className="checkbox click" />
            <input type="checkbox" id="dss2" className="checkbox click" />
            <input type="checkbox" id="dss3" className="checkbox click" />
            <input type="checkbox" id="dsf1" className="checkbox click" />
            <input type="checkbox" id="dsf2" className="checkbox click" />
            <input type="checkbox" id="dsf3" className="checkbox click" />
            <div id="other" className="list">
                <div className="row">
                    <b>Armor:&nbsp;</b>
                    {char.proficiencies.armor.length
                        ? char.proficiencies.armor.map(function (x, i) {
                            return <div id={`armor_${i}`}>{x},&nbsp;</div>;
                        })
                        : "None"}
                </div>
                <div className="row">
                    <b>Weapons:&nbsp;</b>
                    {char.proficiencies.weapons.length
                        ? char.proficiencies.weapons.map(function (x, i) {
                            return <div id={`weapons_${i}`}>{x},&nbsp;</div>;
                        })
                        : "None"}
                </div>
                <div className="row">
                    <b>Mastery:&nbsp;</b>
                    {char.proficiencies.mastery.length
                        ? char.proficiencies.mastery.map(function (x, i) {
                            return <div id={`mastery_${i}`}>{x},&nbsp;</div>;
                        })
                        : "None"}
                </div>
                <div className="row">
                    <b>Expertise:&nbsp;</b>
                    {char.proficiencies.expertise.length
                        ? char.proficiencies.expertise.map(function (x, i) {
                            return <div id={`expertise_${i}`}>{x},&nbsp;</div>;
                        })
                        : "None"}
                </div>
                <div className="row">
                    <b>Tools:&nbsp;</b>
                    {char.proficiencies.tools.length
                        ? char.proficiencies.tools.map(function (x, i) {
                            return <div id={`tools_${i}`}>{x},&nbsp;</div>;
                        })
                        : "None"}
                </div>
                <div className="row">
                    <b>Lang:&nbsp;</b>
                    {char.proficiencies.languages.length
                        ? char.proficiencies.languages.map(function (x, i) {
                            return <div id={`armor_${i}`}>{x},&nbsp;</div>;
                        })
                        : "None"}
                </div>
            </div>
            {/* Attacks */}
            <div id="attack_name_1" className="input start">
                Crossbow
            </div>
            <div id="attack_attack_1" className="input start">
                7
            </div>
            <div id="attack_damage_1" className="input start">
                1d6+5/piercing
            </div>
            <div id="attack_name_2" className="input start">
                Bayblade
            </div>
            <div id="attack_attack_2" className="input start">
                4
            </div>
            <div id="attack_damage_2" className="input start">
                1d8+{char.pb}/force
            </div>
            <div id="attack_name_3" className="input start">
                Thunderclap
            </div>
            <div id="attack_attack_3" className="input start">
                4
            </div>
            <div id="attack_damage_3" className="input start">
                1d6/thunder
            </div>
            <div id="attack_list" className="list">
                {char.spells.cantrips.length
                    ? char.spells.cantrips.map(function (x, i) {
                        return (
                            <div
                                id={`spell_${i}`}
                                className="click"
                                onClick={() => click(x.name, x.val)}
                            >
                                {x.name}
                            </div>
                        );
                    })
                    : null}
                {char.spells.lv1.length
                    ? char.spells.lv1.map(function (x, i) {
                        return (
                            <div
                                id={`spell_${i}`}
                                className="click"
                                onClick={() => click(x.name, x.val)}
                            >
                                {x.name}
                            </div>
                        );
                    })
                    : null}
            </div>
            {/* Equipment */}
            <div id="equipment" className="list">
                {char.equipment.length
                    ? char.equipment.map(function (x) {
                        return (
                            <div
                                id={`equipment_${x.name}`}
                                className="click"
                                onClick={() => click(x.name, x.val)}
                            >
                                {x.name}
                            </div>
                        );
                    })
                    : "None"}
            </div>
            <div id="cp" className="input">
                {char.copper}
            </div>
            <div id="sp" className="input">
                {char.silver}
            </div>
            <div id="ep" className="input"></div>
            <div id="gp" className="input">
                {char.gold}
            </div>
            <div id="pp" className="input"></div>
            {/* Right side */}
            <div id="trait" className="input traits">
                <div className="spel-slot">
                    <div>Level 1</div>
                    <div>
                        <button onClick={() => handleSlots(1, false)}>-</button>
                        <div>{spellSlots[0]}</div>
                        <button onClick={() => handleSlots(1, true)}>+</button>
                    </div>
                </div>
                <div className="spel-slot">
                    <div>Level 2</div>
                    <div>
                        <button onClick={() => handleSlots(2, false)}>-</button>
                        <div>{spellSlots[1] ? spellSlots[1] : 0}</div>
                        <button onClick={() => handleSlots(2, true)}>+</button>
                    </div>
                </div>
                <div className="spel-slot">
                    <div>Level 3</div>
                    <div>
                        <button onClick={() => handleSlots(3, false)}>-</button>
                        <div>{spellSlots[2] ? spellSlots[2] : 0}</div>
                        <button onClick={() => handleSlots(3, true)}>+</button>
                    </div>
                </div>
            </div>
            <div
                id="ideals"
                className="input click"
            // onClick={() => openSpellbox("cantrips")}
            >
                Cantrips
            </div>
            <div
                id="bonds"
                className="input click"
            // onClick={() => openSpellbox("spells")}
            >
                My Spells
            </div>
            <div
                id="flaws"
                className="input click"
            // onClick={() => click("familiar", char.familiar)}
            >
                My Familiar
            </div>
            <div id="feats" className="list">
                {char.feat.length
                    ? char.feat.map(function (x) {
                        return (
                            <div
                                id={`feat_${x.name}`}
                                className="click"
                            // onClick={() => click(x.name, x.val)}
                            >
                                {x.name}
                            </div>
                        );
                    })
                    : "None"}
            </div>
        </div>
    )
}

export default Inputs