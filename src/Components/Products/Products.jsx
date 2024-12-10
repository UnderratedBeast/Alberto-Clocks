import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useCart } from "../data/CartContext";
import productsData from "../data/data"; // Importing the products data
import { FaCartPlus, FaHeart } from "react-icons/fa";
import "./Products.css"; // Import the custom CSS file
import BackToTop from "../BackToTop/BackToTop";
function Products() {
  const { addToCart, addToWishlist } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [rolexCategory, setRolexCategory] = useState("All");
  const [bulovaCategory, setBulovaCategory] = useState("All");
  const [citizenCategory, setCitizenCategory] = useState("All");
  const [michealCategory, setMichealCategory] = useState("All");

  const handleShow = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      addToCart(selectedProduct);
      handleClose();
    }
  };

  const handleAddToWishlist = () => {
    if (selectedProduct) {
      addToWishlist(selectedProduct);
      handleClose();
    }
  };

  const filteredData = (brand, type) => {
    let data = productsData.filter((product) => product.brand == brand);
    if (type === "All") {
      return data;
    }
    return data.filter((product) => product.type == type);
  };

  const rolexData = filteredData("rolex", rolexCategory);
  const bulovaData = filteredData("bulova", bulovaCategory);
  const citizenData = filteredData("citizen", citizenCategory);
  const michealData = filteredData("micheal", michealCategory);

  return (
    <>
      <div className="product-hero_section">
        <p> PRODUCTS</p>
      </div>
      <div class="product-section" id="product_id">
        <div class="product-section-header">
          <p class="header1 nunito-header">PRODUCTS</p>
          <p class="header2">Shop By Brand</p>
        </div>
        <div class="product-section-cards">
          <div class="product-section-card1-image">
            <img src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/09/banner-9.png" />
            <button class="product-section-card1-button rolex-button nunito-header">
              <a href="#rolex_id">ROLEX</a>
            </button>
          </div>

          <div class="product-section-card1-image">
            <img src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/08/banner-10-1.jpg" />
            <button class="product-section-card1-button bulova-button nunito-header">
            <a href="#bulova_id"> BULOVA</a>
            </button>
          </div>

          <div class="product-section-card1-image">
            <img src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/08/cat-4.png" />
            <button class="product-section-card1-button micheal_kors-button nunito-header">
            <a href="#micheal_id">MICHEAL KORS</a>
            </button>
          </div>
          <div class="product-section-card1-image">
            <img src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/08/cat-1.png" />
            <button class="product-section-card1-button citizen-button nunito-header">
            <a href="#citizen_id"> CITIZEN ECO-DRIVE</a>
            </button>
          </div>
        </div>
      </div>
      <div className="watches-con">
        <div className="watch-header-con">
          <p className="watch-header nunito-header" id="rolex_id">ROLEX WATCHES</p>
          <div className="watch-sub-header-con">
            <button
              onClick={() => setRolexCategory("All")}
              className={`btns btn btn-sm ${
                rolexCategory === "All" ? "active" : "inactive"
              }`}
            >
              All Categories
            </button>
            <button
              onClick={() => setRolexCategory("luxury")}
              className={`btns btn btn-sm ${
                rolexCategory === "luxury" ? "active" : "inactive"
              }`}
            >
              Luxury
            </button>
            <button
              onClick={() => setRolexCategory("smart")}
              className={`btns btn btn-sm ${
                rolexCategory === "smart" ? "active" : "inactive"
              }`}
            >Smart</button>

            <button
              onClick={() => setRolexCategory("vintage")}
              className={`btns btn btn-sm ${
                rolexCategory === "vintage" ? "active" : "inactive"
              }`}
            >Vintage</button>
          </div>
        </div>
        <div className="d-flex flex-wrap div-con">
          {rolexData.map((product) => (
            <Card key={product.id} className="divcard1">
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Price: ${product.price.toFixed(2)}</Card.Text>
                <Button
                  className="divcard1-btn"
                  variant="primary"
                  onClick={() => handleShow(product)}
                >
                  View More
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
        {/* Modal for displaying product details */}
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body">
            <div className="image-container">
              <img
                src={selectedProduct?.image}
                alt={selectedProduct?.name}
                style={{ width: "100%" }}
              />
            </div>
            <div className="info-container">
              <h5>Price: ${selectedProduct?.price.toFixed(2)}</h5>
              <p>
                Description:{" "}
                {selectedProduct?.description || "No description available."}
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleAddToCart}>
              <FaCartPlus /> Add to Cart
            </Button>
            <Button variant="outline-danger" onClick={handleAddToWishlist}>
              <FaHeart /> Add to Wishlist
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div className="watches-con">
        <div className="watch-header-con">
          <p className="watch-header nunito-header" id="bulova_id">BULOVA WATCHES</p>
          <div className="watch-sub-header-con">
          <button
              onClick={() => setBulovaCategory("All")}
              className={`btns btn btn-sm ${
                bulovaCategory === "All" ? "active" : "inactive"
              }`}
            >
              All Categories
            </button>
            <button
              onClick={() => setBulovaCategory("luxury")}
              className={`btns btn btn-sm ${
                bulovaCategory === "luxury" ? "active" : "inactive"
              }`}
            >
              Luxury
            </button>
            <button
              onClick={() => setBulovaCategory("smart")}
              className={`btns btn btn-sm ${
                bulovaCategory === "smart" ? "active" : "inactive"
              }`}
            >Smart</button>

            <button
              onClick={() => setBulovaCategory("vintage")}
              className={`btns btn btn-sm ${
                bulovaCategory === "vintage" ? "active" : "inactive"
              }`}
            >Vintage</button>
          </div>
        </div>

        <div className="d-flex flex-wrap div-con">
          {bulovaData.map((product) => (
            <Card key={product.id} className="divcard1">
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Price: ${product.price.toFixed(2)}</Card.Text>
                <Button
                  className="divcard1-btn"
                  variant="primary"
                  onClick={() => handleShow(product)}
                >
                  View More
                </Button>
              </Card.Body>
            </Card>
          ))}

          {/* Modal for displaying product details */}
          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProduct?.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-body">
              <div className="image-container">
                <img
                  src={selectedProduct?.image}
                  alt={selectedProduct?.name}
                  style={{ width: "100%" }}
                />
              </div>
              <div className="info-container">
                <h5>Price: ${selectedProduct?.price.toFixed(2)}</h5>
                <p>
                  Description:{" "}
                  {selectedProduct?.description || "No description available."}
                </p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleAddToCart}>
                <FaCartPlus /> Add to Cart
              </Button>
              <Button variant="outline-danger" onClick={handleAddToWishlist}>
                <FaHeart /> Add to Wishlist
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>

      <div className="watches-con">
        <div className="watch-header-con">
          <p className="watch-header nunito-header" id="citizen_id">CITIZEN WATCHES</p>
          <div className="watch-sub-header-con">
          <button
              onClick={() => setCitizenCategory("All")}
              className={`btns btn btn-sm ${
                citizenCategory === "All" ? "active" : "inactive"
              }`}
            >
              All Categories
            </button>
            <button
              onClick={() => setCitizenCategory("luxury")}
              className={`btns btn btn-sm ${
                citizenCategory === "luxury" ? "active" : "inactive"
              }`}
            >
              Luxury
            </button>
            <button
              onClick={() => setCitizenCategory("smart")}
              className={`btns btn btn-sm ${
                citizenCategory === "smart" ? "active" : "inactive"
              }`}
            >Smart</button>

            <button
              onClick={() => setCitizenCategory("vintage")}
              className={`btns btn btn-sm ${
                citizenCategory === "vintage" ? "active" : "inactive"
              }`}
            >Vintage</button>
          </div>
        </div>
        <div className="d-flex flex-wrap div-con">
          {citizenData.map((product) =>(
                <Card key={product.id} className="divcard1">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.name}
                  />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>Price: ${product.price.toFixed(2)}</Card.Text>
                    <Button
                      className="divcard1-btn"
                      variant="primary"
                      onClick={() => handleShow(product)}
                    >
                      View More
                    </Button>
                  </Card.Body>
                </Card>
              )
          )}

          {/* Modal for displaying product details */}
          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProduct?.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-body">
              <div className="image-container">
                <img
                  src={selectedProduct?.image}
                  alt={selectedProduct?.name}
                  style={{ width: "100%" }}
                />
              </div>
              <div className="info-container">
                <h5>Price: ${selectedProduct?.price.toFixed(2)}</h5>
                <p>
                  Description:{" "}
                  {selectedProduct?.description || "No description available."}
                </p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleAddToCart}>
                <FaCartPlus /> Add to Cart
              </Button>
              <Button variant="outline-danger" onClick={handleAddToWishlist}>
                <FaHeart /> Add to Wishlist
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>

      <div className="watches-con">
        <div className="watch-header-con">
          <p className="watch-header nunito-header" id="micheal_id">MICHEAL_KORS WATCHES</p>
          <div className="watch-sub-header-con">
          <button
              onClick={() => setMichealCategory("All")}
              className={`btns btn btn-sm ${
                michealCategory === "All" ? "active" : "inactive"
              }`}
            >
              All Categories
            </button>
            <button
              onClick={() => setMichealCategory("luxury")}
              className={`btns btn btn-sm ${
                michealCategory === "luxury" ? "active" : "inactive"
              }`}
            >
              Luxury
            </button>
            <button
              onClick={() => setMichealCategory("smart")}
              className={`btns btn btn-sm ${
                michealCategory === "smart" ? "active" : "inactive"
              }`}
            >Smart</button>

            <button
              onClick={() => setMichealCategory("vintage")}
              className={`btns btn btn-sm ${
                michealCategory === "vintage" ? "active" : "inactive"
              }`}
            >Vintage</button>
          </div>
        </div>
        <div className="d-flex flex-wrap div-con">
          {michealData.map((product) => (
                <Card key={product.id} className="divcard1">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.name}
                  />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>Price: ${product.price.toFixed(2)}</Card.Text>
                    <Button
                      className="divcard1-btn"
                      variant="primary"
                      onClick={() => handleShow(product)}
                    >
                      View More
                    </Button>
                  </Card.Body>
                </Card>
              )
          )}

          {/* Modal for displaying product details */}
          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProduct?.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-body">
              <div className="image-container">
                <img
                  src={selectedProduct?.image}
                  alt={selectedProduct?.name}
                  style={{ width: "100%" }}
                />
              </div>
              <div className="info-container">
                <h5>Price: ${selectedProduct?.price.toFixed(2)}</h5>
                <p>
                  Description:{" "}
                  {selectedProduct?.description || "No description available."}
                </p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              {/* <Button variant="secondary" className="extra-btns" onClick={handleClose}>
              Close
            </Button> */}
              <Button
                variant="primary"
                className="cart-btns"
                onClick={handleAddToCart}
              >
                <FaCartPlus /> Add to Cart
              </Button>
              <Button
                variant="outline-danger"
                className="wish-btns"
                onClick={handleAddToWishlist}
              >
                <FaHeart /> Add to Wishlist
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
      <BackToTop/>
    </>
  );
}

export default Products;
