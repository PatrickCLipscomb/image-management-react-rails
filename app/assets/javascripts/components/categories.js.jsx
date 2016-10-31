'use strict';

class Categories extends BaseComponent {
  constructor() {
    super();
    this._bind();
    this.state = {
      categories: [
      {id:1, name:"Social Media"},
      {id:2, name:"Advertising"},
      {id:3, name:"Website Graphics"}
      ]
    };
  }

  render() {
    var categories = this.state.categories.map((category)=> {
      return <Category name={category.name} key={category.id} />
    });
    return(
      <div className="pageBox">

        <h2 className="startingQ">WHAT WOULD</h2>
        <h2 className="startingQ">YOU LIKE TO</h2>
        <h2 className="startingQ">CREATE?</h2>
        <br></br>
        <div className = "categories pageContent">
          <div className="itemList">
            {categories}
          </div>
        </div>
      </div>
    )
  }
}

Categories.defaultProps = {
  categories: []
}
