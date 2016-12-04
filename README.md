# Sugar JSON

JSON plugin for Sugar JS

## Usage

Unless you using Sugar in [extended mode](https://sugarjs.com/quickstart/#/ExtendedMode) this plugin is [pretty much useless](https://github.com/andrewplummer/Sugar/issues/294#issuecomment-264721479).

See relevant parts of docs:

[sugarjs.com/quickstart/#/ChoosingAMode](https://sugarjs.com/quickstart/#/ChoosingAMode)

> Do not use extended mode if you are developing a library or other form of middleware. This is due to both awareness of the global scope described above as well as potential conflicts with versioning if other versions of Sugar exist. Extended mode should only be used by end users.

[sugarjs.com/docs/#/objectPrototype](https://sugarjs.com/docs/#/objectPrototype)

> If you're feeling adventurous (and you generally have control over the code in your project) you can force Sugar to extend Object.prototype at your own risk using the objectPrototype flag

[sugarjs.com/extending](https://sugarjs.com/extending/)

> The decision to have a modified global state is one that the end user or team should be well aware of. Failing to do this leads to issues that can be difficult to track down.

**tl;dr; using extend is dangerous for middleware and libraries, and extending objectPrototype is always dangerous**

(don't tell people on stack overflow that you have done this unless you are very thick skinned)

Having said all that, if you are both adventurous, and in control, you can now easily convert from plain js objects to json strings and back with ease, in a chainable way...

Configure Sugar to extend prototypes, including Object.prototype

    require('sugar').extend({
      objectPrototype: true
    })
    
    require('sugar-json')

... define an object ...

    let obj = {cool: 'beans'}

... turn it into string, do some replacements, then turn it back to object ...

    let res = obj.stringify().replace('a', 'i').replace('cool', 'human').objectify()

... test it out ...

    console.log(res)
    // -> { human: 'beins' }
