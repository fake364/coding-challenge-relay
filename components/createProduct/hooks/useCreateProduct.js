// @flow
import {graphql, useMutation} from "react-relay";

const useCreateProduct = () => {
    const [commitMutation, isMutationInFlight] = useMutation(graphql`
        mutation createProductMutation($input: ProductInput!) {
            createProduct(product: $input) {
                message
            }
        }
    `);

    return {
        isMutationInFlight: isMutationInFlight,
        createProduct: (productToCreate) => {
            const variables = {
                input: productToCreate
            };
            commitMutation({
                variables
            });
        }
    };
};

export default useCreateProduct;