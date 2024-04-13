export function navbar() {
    return `<nav class="nav">
    <div class="left">
      <ul>
        <li>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Myntra_Logo.png/120px-Myntra_Logo.png"
            alt=""
          />
        </li>
        <li><a href="#">MEN</a></li>
        <li><a href="#">WOMEN</a></li>
        <li><a href="#">KIDS</a></li>
        <li><a href="#">HOME&LIVING</a></li>
        <li><a href="#">BEAUTY</a></li>
        <li>
          <a href="#">STUDIO<sup>NEW</sup></a>
        </li>
      </ul>
    </div>
    <div class="search_bar">
      <span class="material-symbols-outlined" id="search_icon">search</span>
      <input class="search_input" type="text" placeholder="Search for product,brand and more"/>
    </div>
    <div class="right">
      <ul>
        <li>
          <span class="material-symbols-outlined person"> person </span>
          <a class="profile" href="index.html">Profile</a>
        </li>

        <li>
          <span class="material-symbols-outlined Wishlist"> favorite </span>
          <a href="#">Wishlist</a>
        </li>
        <li >
        
          <span class="material-symbols-outlined">shopping_bag </span>
          <span id="span"></span>
          <a href="bag.html">Bag</a>
        </li>
      </ul>
    </div>
  </nav>
  `
}