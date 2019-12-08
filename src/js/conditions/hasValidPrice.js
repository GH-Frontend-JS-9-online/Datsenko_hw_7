function hasValidPrice(product) {
    return product !== undefined && (product.price instanceof Number || typeof product.price === 'number') &&
        !isNaN(product.price) && product.price >= 0
}

module.exports = hasValidPrice