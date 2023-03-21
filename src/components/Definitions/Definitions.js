
import React from "react";
import "./Definitions.css";

const Definitions = ({ word, meanings, category, LightMode }) => {
  return (
    <div className="meanings">
      {meanings[0] && word && category === "en" && (
        <audio
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          style={{ backgroundColor: "#fff", borderRadius: 10 }}
          controls
        >
          Your Browser doesn't support audio elements.
        </audio>
      )}

      {word === "" ? (
        <span className="subTitle">Start by typing a word in Search</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMean"
                style={{ backgroundColor: LightMode? "#525252" : "white", color: LightMode? "white" : "#525252" }}
              >
                <b>{def.definition}</b>
                {def.example && (
                  <span>
                    <hr
                      style={{ backgroundColor: "black", width: "100%" }}
                    ></hr>
                    <b>Example : </b> {def.example}
                  </span>
                )}
                {def.synonims && (
                  <span>
                    <hr
                      style={{ backgroundColor: "black", width: "100%" }}
                    ></hr>
                    <b>Synonims : </b> {def.synonims.map((s) => `${s}, `)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definitions;
