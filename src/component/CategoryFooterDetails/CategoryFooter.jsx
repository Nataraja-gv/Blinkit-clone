import "./CategoryFooter.css";

const CategoryFooter = () => {
  return (
    <div className="Category-usefull-container">
      <div className="usefull-links-container">
        <h1 className="category-h1">Useful Links</h1>
        <div className="usefull-section">
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Press</li>
            <li>Lead</li>
            <li>Value</li>
          </ul>

          <ul>
            <li>Privacy</li>
            <li>Terms</li>
            <li>FAQs</li>
            <li>Security</li>
            <li>Mobile</li>
            <li>Contact</li>
          </ul>

          <ul>
            <li>Partner</li>
            <li>Express</li>
            <li>Seller</li>
            <li>Warehouse</li>
            <li>Deliver</li>
            <li>Resources</li>
          </ul>
        </div>
      </div>

      <div className="Category-links-container">
        <h1  className="category-h1">
          Categories <span style={{color:"green"}}>see all</span>
        </h1>
        <div className="category-section">
          <ul>
            <li>Vegetables & Fruits</li>
            <li>Cold Drinks & Juices</li>
            <li>Bakery & Biscuts</li>
            <li>Dry Fruits,Masala & Oil</li>
            <li>Pann Corner</li>
            <li>Pharma & Wellness</li>
            <li>Personal Care</li>
            <li>Beauty & Cosmetics</li>
            <li>Toys & Games</li>
          </ul>

          <ul>
            <li>Dairy & Breakfast</li>
            <li>Instant & Frozen Food</li>
            <li>Sweet Tooth</li>
            <li>Sauces & Spreads</li>
            <li>Organic & Premium</li>
            <li>Cleaning Essentails</li>
            <li>Ice Creams & Frozen Desserts</li>
            <li>Magazines</li>
            <li>Print Store</li>
          </ul>
          <ul>
            <li>Munchies</li>
            <li>Tea,Coffee & Health Drinks</li>
            <li>Atte,Rice & Dal</li>
            <li>Chicken,Meat & Fish</li>
            <li>Baby Care</li>
            <li>Home Care</li>
            <li>Pet Care</li>
            <li>Books</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryFooter;
