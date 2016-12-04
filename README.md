# Sugar JSON

JSON plugin for Sugar JS

## Usage

initialise...

    let Sugar = require('sugar').extend()
    require('sugar-json')

... objectify json strings ...

    let str = '{"cool":"beans"}'
    str.objectify()
    // -> { cool: 'beans' }

... json stringify objects ...

    let obj = new Sugar.Object({cool: 'beans'})
    obj.stringify().raw
    // -> {"cool":"beans"}
