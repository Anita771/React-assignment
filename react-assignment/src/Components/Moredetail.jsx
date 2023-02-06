
export default function Moredetail(props) {
    return (
        <div>
            <h3>Country</h3>
            <h2>Capital</h2>
            <img
          src={props.flags.svg}
          alt={props.name.common}
          width="600"
          height="400"
        />
            <p> The country belongs to <span className="blue">{props.region}</span>{" "}
                region and <span className="blue">{props.subregion}</span> sub-region.
                Located at the <span className="blue">{props.latlng[0]}</span> &deg;N
                and <span className="blue">{props.latlng[1]}</span> &deg;W, this
                country has population of{" "}
                <span className="blue">{props.population}</span> and it has gained the
                independent, according to the CIA World Factbook.
            </p>

        </div>

    );
}