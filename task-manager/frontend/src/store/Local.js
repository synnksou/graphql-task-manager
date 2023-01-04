import store from 'store2'
import { get } from 'lodash'

const Local = (namespace) => {
  return {
    get: (scope, key) => {
      if (key) {
        return get(store.namespace(namespace).get(scope), key)
      } else {
        return store.namespace(namespace).get(scope)
      }
    },
    set: (scope, obj) => {
      return store.namespace(namespace).add(scope, obj)
    },
    unset: (scope) => {
      return store.namespace(namespace).remove(scope)
    },
    clear: () => {
      return store.namespace(namespace).clearAll()
    },
    keys: () => {
      return store.namespace(namespace).keys()
    },
  }
}

export default Local
