(function () {
  var hasExports = typeof module !== 'undefined' && module.exports

  if (hasExports) {
    var Sugar = require('sugar-core')
  }

  Sugar.String.defineInstance({

    /***
     * @method objectify()
     * @returns Object
     * @short calls JSON.parse on string
     * @extra calls JSON.parse on json String, returning a javascript object. Does not do any validations.
     * For antonym, see stringify on Object.
     * @example
     *
     *   let str = '{"some":"valid","json":"string"}'
     *   str.objectify() -> {some: 'valid', json: 'string'}
     *
     ***/
    'objectify': function (str) {
      return JSON.parse(str)
    }

  })

  Sugar.Object.defineInstance({

    /***
     * @method stringify()
     * @returns String
     * @short calls JSON.stringify on string
     * @extra calls JSON.stringify on an Object, returning a JSON string. Does not do any validations.
     * For antonym, see parse on String.
     * @example
     *
     *   let obj = {some: 'plain old', js: 'object'}
     *   obj.stringify() -> '{"some":"plain old","js":"object"}'
     *
     ***/
    'stringify': function (obj) {
      return JSON.stringify(obj)
    }

  })

  if (hasExports) {
    module.exports = {
      objectify: Sugar.String.objectify,
      stringify: Sugar.Object.stringify
    }
  }
})()
