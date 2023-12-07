/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProductInput = {|
  id: string,
  name: string,
  description: string,
  price: number,
  createdAt: string,
|};
export type createProductMutationVariables = {|
  input: ProductInput
|};
export type createProductMutationResponse = {|
  +createProduct: ?{|
    +message: string
  |}
|};
export type createProductMutation = {|
  variables: createProductMutationVariables,
  response: createProductMutationResponse,
|};
*/


/*
mutation createProductMutation(
  $input: ProductInput!
) {
  createProduct(product: $input) {
    message
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "product",
        "variableName": "input"
      }
    ],
    "concreteType": "MessageStatus",
    "kind": "LinkedField",
    "name": "createProduct",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "message",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "createProductMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "createProductMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ed0d0efcac0b18be23c6edf39b88fa96",
    "id": null,
    "metadata": {},
    "name": "createProductMutation",
    "operationKind": "mutation",
    "text": "mutation createProductMutation(\n  $input: ProductInput!\n) {\n  createProduct(product: $input) {\n    message\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1eb38c749d7736348c3df226d15b4604';

module.exports = node;
