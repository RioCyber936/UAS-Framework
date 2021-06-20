// import modular routes
import webRoutes from "../modules/web/routes"
import authRoutes from "../modules/auth/routes"
import userRoutes from "../modules/users/routes"
import categoryRoutes from "../modules/categories/routes"
import productRoutes from "../modules/products/routes"
import transactionRoutes from "../modules/transactions/routes"

export default [...webRoutes, ...authRoutes, ...userRoutes, ...categoryRoutes, ...productRoutes, ...transactionRoutes]
