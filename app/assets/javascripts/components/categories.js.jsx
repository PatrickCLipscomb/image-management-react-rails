'use strict';

class Categories extends BaseComponent {
  constructor(props) {
    super();
    this._bind();
    this.state = {
      categories: props.data[0],
      templates: props.data[1]
    };
    console.log(props.data[0])
  }

  render() {
    var categories = this.state.categories.map((category, index)=> {
      return <Category name={category.name} key={category.id} image={category.image} />
    });
    return(
      <div className="pageBox">

        // <div className="borderQ">#</div>
        <div className="question">
          <p className="startingQ">WHAT WOULD</p>
          <p className="startingQ">YOU LIKE TO</p>
          <p className="startingQ">CREATE?</p>
        </div>
        // <div className="borderQ">#</div>

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
