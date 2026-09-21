import { menuGroups } from "../../utils/constants.js";
import "./Menu.css";
function Menu() {
  return (
    <section
      id="full-menu"
      className="menu section container"
      aria-labelledby="menu-title"
    >
      <div className="section__heading">
        <p className="eyebrow">ALL THE GOOD STUFF</p>
        <h2 id="menu-title">Find your next favorite.</h2>
        <p>The full lineup, from your first sip to your last sweet bite.</p>
      </div>
      <nav className="menu__categories" aria-label="Menu categories">
        {menuGroups.map((group) => (
          <a href={`#menu-${group.id}`} key={group.id}>
            {group.name}
          </a>
        ))}
      </nav>
      <div className="menu__groups">
        {menuGroups.map((group) => (
          <section
            className="menu__group"
            id={`menu-${group.id}`}
            key={group.id}
            aria-labelledby={`title-${group.id}`}
          >
            <div className="menu__group-heading">
              <h3 id={`title-${group.id}`}>{group.name}</h3>
              <p>{group.subtitle}</p>
            </div>
            <ul className="menu__items">
              {group.items.map(([name, price, description]) => (
                <li className="menu__item" key={name}>
                  <div>
                    <h4>{name}</h4>
                    {description && <p>{description}</p>}
                  </div>
                  <span className="menu__price">{price}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <p className="menu__note">
        Prices and availability may change. Call the shop to confirm today’s
        flavors and prices.
      </p>
    </section>
  );
}
export default Menu;
