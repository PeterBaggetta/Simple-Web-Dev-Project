export function MenuBar() { 

     return (<div>
        <header className="App-header"> 
        <img src="https://media.giphy.com/media/kG3EDN0eXqq4V1Pd6W/giphy-downsized-large.gif" width="92" height="80"/>
      </header>
      {/* Dropdown menus */}
      <div className="dropdown">
        <button className="dropbtn">Menu</button>
        <div className="dropdown-content">
          <a href='/'>Add Items</a>
          <a href='/getByName'>Get Items by Name</a>
          <a href='/getByCategory'>Get Items by Category</a>
          <a href='/updateItemQuantity'>Update Item Quantity</a>
          <a href='/deleteItem'>Delete Item</a>
          <a href='/showAllItems'>Show all Items</a>
          {/* <a href='/findTotal'>Find Total Number of Items</a> */}
        </div>
      </div>
    </div>
     );    
}