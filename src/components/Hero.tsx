import { heroPhotos, rating } from "../content";
import { Header } from "./Header";
import { Icon } from "./Icon";
import { Leaf, type LeafSpec } from "./Leaf";
import { Parallax } from "./Parallax";

const STARS = [
    [120, 140, 1.4, 0.6],
    [260, 90, 1, 0.5],
    [410, 200, 1.2, 0.4],
    [560, 70, 1.6, 0.6],
    [700, 160, 1, 0.4],
    [880, 110, 1.3, 0.5],
    [1010, 60, 1, 0.4],
    [1180, 150, 1.5, 0.6],
    [1320, 90, 1, 0.5],
    [1390, 230, 1.2, 0.4],
    [330, 300, 1, 0.3],
    [960, 260, 1, 0.3],
];

const NEAR_LEAVES: LeafSpec[] = [
    {
        left: "3%",
        bottom: "200px",
        size: 64,
        tone: "green",
        duration: 11,
        from: -18,
        to: -4,
        dx: 14,
        dy: -20,
    },
    {
        left: "44%",
        bottom: "250px",
        size: 42,
        tone: "dry",
        duration: 9,
        delay: -3,
        from: 30,
        to: 52,
        dx: -12,
        dy: -16,
    },
];

const FAR_LEAVES: LeafSpec[] = [
    {
        left: "52%",
        top: "120px",
        size: 34,
        tone: "deep",
        duration: 13,
        delay: -6,
        from: 12,
        to: 34,
        dx: 18,
        dy: -10,
        opacity: 0.8,
        hideOnPhone: true,
    },
    {
        left: "88%",
        top: "300px",
        size: 52,
        tone: "green",
        duration: 10,
        delay: -2,
        from: -40,
        to: -22,
        dx: -16,
        dy: -22,
        hideOnPhone: true,
    },
    {
        left: "60%",
        top: "760px",
        size: 26,
        tone: "dry",
        duration: 12,
        delay: -8,
        from: 70,
        to: 90,
        dx: 10,
        dy: -12,
        opacity: 0.7,
        hideOnPhone: true,
    },
];

/** The hero landscape. Layers are listed back to front; see DESIGN.md › Motion for the shifts. */
function Landscape() {
    return (
        <div className="landscape" aria-hidden="true">
            <Parallax shift={70} className="landscape__layer">
                <svg
                    viewBox="0 0 1440 860"
                    preserveAspectRatio="xMidYMin slice"
                    width="100%"
                    height="100%"
                >
                    <g fill="var(--on-dark)">
                        {STARS.map(([cx, cy, r, o]) => (
                            <circle
                                key={`${cx}-${cy}`}
                                cx={cx}
                                cy={cy}
                                r={r}
                                opacity={o}
                            />
                        ))}
                    </g>
                </svg>
            </Parallax>
            <Parallax shift={280} className="landscape__sun">
                <svg viewBox="0 0 760 760" width="100%" height="100%">
                    <circle
                        cx="380"
                        cy="380"
                        r="370"
                        fill="none"
                        stroke="var(--sun)"
                        strokeOpacity="0.07"
                        strokeWidth="2"
                    />
                    <circle
                        cx="380"
                        cy="380"
                        r="300"
                        fill="var(--sun)"
                        fillOpacity="0.05"
                    />
                    <circle
                        cx="380"
                        cy="380"
                        r="230"
                        fill="var(--sun)"
                        fillOpacity="0.08"
                    />
                    {/* The sun sits behind the copy, so its disc is a glow rather than solid to keep the text legible. */}
                    <circle
                        cx="380"
                        cy="380"
                        r="160"
                        fill="var(--sun)"
                        fillOpacity="0.16"
                    />
                </svg>
            </Parallax>
            <Parallax
                shift={150}
                className="landscape__ridge landscape__ridge--far"
            >
                <svg
                    viewBox="0 0 1440 520"
                    preserveAspectRatio="xMidYMax slice"
                    width="100%"
                    height="100%"
                >
                    <path
                        d="M0 260 C180 210 320 180 520 210 C700 238 820 170 1000 160 C1160 152 1300 200 1440 190 L1440 520 L0 520 Z"
                        fill="var(--dune)"
                    />
                </svg>
            </Parallax>
            <Parallax
                shift={70}
                className="landscape__ridge landscape__ridge--mid"
            >
                <svg
                    viewBox="0 0 1440 420"
                    preserveAspectRatio="xMidYMax slice"
                    width="100%"
                    height="100%"
                >
                    <path
                        d="M0 230 C160 210 300 170 460 190 C640 212 760 250 960 220 C1120 196 1280 170 1440 190 L1440 420 L0 420 Z"
                        fill="var(--ridge)"
                    />
                </svg>
            </Parallax>
            <div className="landscape__ground">
                <svg
                    viewBox="0 0 1440 300"
                    preserveAspectRatio="xMidYMax slice"
                    width="100%"
                    height="100%"
                >
                    <path
                        d="M0 230 C240 210 480 220 720 226 C960 232 1200 208 1440 218 L1440 300 L0 300 Z"
                        fill="currentColor"
                    />
                    <use
                        href="#quiver-tree"
                        x="90"
                        y="40"
                        width="160"
                        height="208"
                    />
                    <use
                        href="#quiver-tree"
                        x="300"
                        y="150"
                        width="62"
                        height="80"
                    />
                    <use
                        href="#quiver-tree"
                        x="1100"
                        y="-20"
                        width="220"
                        height="286"
                    />
                    <use
                        href="#quiver-tree"
                        x="1310"
                        y="110"
                        width="96"
                        height="124"
                    />
                </svg>
            </div>
            <Parallax shift={-380} className="landscape__layer">
                {NEAR_LEAVES.map((leaf) => (
                    <Leaf
                        key={`${leaf.left}${leaf.top ?? leaf.bottom}`}
                        spec={leaf}
                    />
                ))}
            </Parallax>
            <Parallax shift={-220} className="landscape__layer">
                {FAR_LEAVES.map((leaf) => (
                    <Leaf
                        key={`${leaf.left}${leaf.top ?? leaf.bottom}`}
                        spec={leaf}
                    />
                ))}
            </Parallax>
        </div>
    );
}

export function Hero() {
    return (
        <section className="hero" id="top">
            <Landscape />
            <Header />
            <div className="hero__body wrap">
                <Parallax shift={-90} className="hero__copy">
                    <p className="eyebrow eyebrow--sun">
                        Bed &amp; breakfast · Keetmanshoop, Namibia
                    </p>
                    <h1 className="hero__title">
                        The long drive
                        <br />
                        <em>ends here.</em>
                    </h1>
                    <p className="hero__lede">
                        Seven en-suite rooms around a shaded garden and pool, a
                        breakfast people write home about.
                    </p>
                    <div className="hero__actions">
                        <a className="btn btn--primary" href="#rooms">
                            See the rooms
                            <Icon name="arrow" size={18} />
                        </a>
                    </div>
                    <ul className="hero__meta">
                        <li>
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="var(--sun)"
                                aria-hidden="true"
                            >
                                <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6L2.5 9.4l6.6-.8z" />
                            </svg>
                            <span>
                                <strong>{rating.score}</strong> from{" "}
                                {rating.count} Google reviews
                            </span>
                        </li>
                        <li>Check-in 14:00 – 19:00</li>
                    </ul>
                </Parallax>
                <Parallax shift={-170} className="hero__photos">
                    <figure className="frame hero__photo hero__photo--main">
                        <img
                            src={heroPhotos.main.src}
                            alt={heroPhotos.main.alt}
                            width={413}
                            height={275}
                        />
                    </figure>
                    <figure className="frame hero__photo hero__photo--inset">
                        <img
                            src={heroPhotos.inset.src}
                            alt={heroPhotos.inset.alt}
                            width={413}
                            height={275}
                        />
                    </figure>
                </Parallax>
            </div>
        </section>
    );
}
