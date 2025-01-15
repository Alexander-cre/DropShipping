const products = [
    { "id": 1, "name": "Classic White Shirt", "price": 19.99, "original_price": 29.99, "quantity": 1, "ratings": 4.5, "Image": "https://via.placeholder.com/150?text=Classic+White+Shirt" },
    { "id": 2, "name": "Blue Denim Jeans", "price": 39.99, "original_price": 49.99, "quantity": 1, "ratings": 4.0, "Image": "https://via.placeholder.com/150?text=Blue+Denim+Jeans" },
    { "id": 3, "name": "Stylish Sunglasses", "price": 29.99, "original_price": 39.99, "quantity": 1, "ratings": 4.7, "Image": "https://via.placeholder.com/150?text=Stylish+Sunglasses" },
    { "id": 4, "name": "Elegant Handbag", "price": 59.99, "original_price": 79.99, "quantity": 1, "ratings": 4.8, "Image": "https://via.placeholder.com/150?text=Elegant+Handbag" },
    { "id": 5, "name": "Running Shoes", "price": 49.99, "original_price": 69.99, "quantity": 1, "ratings": 4.6, "Image": "https://via.placeholder.com/150?text=Running+Shoes" },
    { "id": 6, "name": "Casual Sneakers", "price": 39.99, "original_price": 59.99, "quantity": 1, "ratings": 4.3, "Image": "https://via.placeholder.com/150?text=Casual+Sneakers" },
    { "id": 7, "name": "Leather Wallet", "price": 29.99, "original_price": 39.99, "quantity": 1, "ratings": 4.5, "Image": "https://via.placeholder.com/150?text=Leather+Wallet" },
    { "id": 8, "name": "Woolen Scarf", "price": 19.99, "original_price": 29.99, "quantity": 1, "ratings": 4.2, "Image": "https://via.placeholder.com/150?text=Woolen+Scarf" },
    { "id": 9, "name": "Stylish Watch", "price": 89.99, "original_price": 109.99, "quantity": 1, "ratings": 4.9, "Image": "https://via.placeholder.com/150?text=Stylish+Watch" },
    { "id": 10, "name": "Fitness Tracker", "price": 49.99, "original_price": 69.99, "quantity": 1, "ratings": 4.4, "Image": "https://via.placeholder.com/150?text=Fitness+Tracker" },
    { "id": 11, "name": "Makeup Kit", "price": 39.99, "original_price": 59.99, "quantity": 1, "ratings": 4.6, "Image": "https://via.placeholder.com/150?text=Makeup+Kit" },
    { "id": 12, "name": "Moisturizing Cream", "price": 24.99, "original_price": 34.99, "quantity": 1, "ratings": 4.5, "Image": "https://via.placeholder.com/150?text=Moisturizing+Cream" },
    { "id": 13, "name": "Hair Straightener", "price": 59.99, "original_price": 79.99, "quantity": 1, "ratings": 4.7, "Image": "https://via.placeholder.com/150?text=Hair+Straightener" },
    { "id": 14, "name": "Electric Toothbrush", "price": 39.99, "original_price": 49.99, "quantity": 1, "ratings": 4.8, "Image": "https://via.placeholder.com/150?text=Electric+Toothbrush" },
    {
        "id": 15, "name": "Smartphone", "price": 299.99, "original_price": 399.99,
        "quantity": 1, "ratings": 4.6, "Image": "https://via.placeholder.com/150?text=Smartphone"
    },
    { "id": 16, "name": "Bluetooth Headphones", "price": 79.99, "original_price": 99.99, "quantity": 1, "ratings": 4.5, "Image": "https://via.placeholder.com/150?text=Bluetooth+Headphones" },
    { "id": 17, "name": "Portable Charger", "price": 29.99, "original_price": 39.99, "quantity": 1, "ratings": 4.4, "Image": "https://via.placeholder.com/150?text=Portable+Charger" },
    { "id": 18, "name": "Gaming Mouse", "price": 49.99, "original_price": 69.99, "quantity": 1, "ratings": 4.7, "Image": "https://via.placeholder.com/150?text=Gaming+Mouse" },
    { "id": 19, "name": "Wireless Keyboard", "price": 39.99, "original_price": 59.99, "quantity": 1, "ratings": 4.6, "Image": "https://via.placeholder.com/150?text=Wireless+Keyboard" },
    { "id": 20, "name": "Smartwatch", "price": 199.99, "original_price": 249.99, "quantity": 1, "ratings": 4.8, "Image": "https://via.placeholder.com/150?text=Smartwatch" },
    { "id": 21, "name": "Yoga Mat", "price": 29.99, "original_price": 39.99, "quantity": 1, "ratings": 4.5, "Image": "https://via.placeholder.com/150?text=Yoga+Mat" },
    { "id": 22, "name": "Water Bottle", "price": 19.99, "original_price": 29.99, "quantity": 1, "ratings": 4.4, "Image": "https://via.placeholder.com/150?text=Water+Bottle" },
    { "id": 23, "name": "Fitness Mat", "price": 34.99, "original_price": 44.99, "quantity": 1, "ratings": 4.6, "Image": "https://via.placeholder.com/150?text=Fitness+Mat" },
    { "id": 24, "name": "Dumbbell Set", "price": 49.99, "original_price": 69.99, "quantity": 1, "ratings": 4.7, "Image": "https://via.placeholder.com/150?text=Dumbbell+Set" },
    { "id": 25, "name": "Treadmill", "price": 499.99, "original_price": 599.99, "quantity": 1, "ratings": 4.9, "Image": "https://via.placeholder.com/150?text=Treadmill" },
    { "id": 26, "name": "Blender", "price": 59.99, "original_price": 79.99, "quantity": 1, "ratings": 4.5, "Image": "https://via.placeholder.com/150?text=Blender" },
    { "id": 27, "name": "Coffee Maker", "price": 89.99, "original_price": 109.99, "quantity": 1, "ratings": 4.8, "Image": "https://via.placeholder.com/150?text=Coffee+Maker" },
    { "id": 28, "name": "Air Fryer", "price": 129.99, "original_price": 149.99, "quantity": 1, "ratings": 4.7, "Image": "https://via.placeholder.com/150?text=Air+Fryer" },
    { "id": 29, "name": "Instant Pot", "price": 99.99, "original_price": 119.99, "quantity": 1, "ratings": 4.6, "Image": "https://via.placeholder.com/150?text=Instant+Pot" },
]
    ;

export default products;