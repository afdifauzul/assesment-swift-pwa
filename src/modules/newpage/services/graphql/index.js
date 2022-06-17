import { useQuery } from '@apollo/client'
import * as Schema from '@core_modules/newpage/services/graphql/schema'

export const getAllProducts = () => useQuery(Schema.getAllProducts);

export default {};
