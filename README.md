# Meteor React Motion
React Motion Animation Library packaged for Meteor  
React Motion is an awesome spring animation library for React developed by [Cheng Lou](https://github.com/chenglou). More information at : https://github.com/chenglou/react-motion

## Installation
```meteor add azfx:react-motion```

## Usage
The library is available as `ReactMotion` for use in Meteor Projects.  
`ReactMotion` exports `Spring`, `TransitionSpring`, `presets` and `utils`.

### Example
```javascript
const {Spring} = ReactMotion  

let Example = React.createClass({
  render() {
    return <div>
      <Spring defaultValue={{val: 0}} endValue={{val: 100}}>
        {
          interpolated =>
            <div className="someclass" style = {{
                transform: `translate3d(${interpolated.val}px, 0, 0)`,
            }} >
            </div>
        }
      </Spring>
    </div>;
  }
})

```

Please refer [documentation](https://github.com/chenglou/react-motion#what-does-this-library-try-to-solve) for more information.  
A sample meteor project with animation examples is on the way..

## Requirements
Meteor 1.2
