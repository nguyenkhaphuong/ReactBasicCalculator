import React from 'react'
import { Button, Display } from './components/components'

const Calculator = () => {
  const primaryButtonColor = '#ffddb0'
  const secondaryButtonColor = 'lightgray'

  const [input, setInput] = React.useState('')

  const handleClick = (value) => {
    setInput(input + value)
  }

  const handleClear = () => {
    setInput('')
  }

  const handleEqual = () => {
    try {
      setInput(eval(input).toString())
    } catch (error) {
      setInput('Syntax Error')
    }
  }

  return (
    <>
      <div className='container'>
        <h1 style={{ margin: '0 0 1rem 0' }}>React Calculator</h1>
        <Display value={input} />
        <div className='calculator-container'>
          <Button
            value={1}
            backgroundColor={primaryButtonColor}
            onClick={() => handleClick('1')}
          />
          <Button
            value={2}
            backgroundColor={primaryButtonColor}
            onClick={() => handleClick('2')}
          />
          <Button
            value={3}
            backgroundColor={primaryButtonColor}
            onClick={() => handleClick('3')}
          />
          <Button
            value='+'
            backgroundColor={secondaryButtonColor}
            onClick={() => handleClick('+')}
          />

          <Button
            value={4}
            backgroundColor={primaryButtonColor}
            onClick={() => handleClick('4')}
          />
          <Button
            value={5}
            backgroundColor={primaryButtonColor}
            onClick={() => handleClick('5')}
          />
          <Button
            value={6}
            backgroundColor={primaryButtonColor}
            onClick={() => handleClick('6')}
          />
          <Button
            value='-'
            backgroundColor={secondaryButtonColor}
            onClick={() => handleClick('-')}
          />

          <Button
            value={7}
            backgroundColor={primaryButtonColor}
            onClick={() => handleClick('7')}
          />
          <Button
            value={8}
            backgroundColor={primaryButtonColor}
            onClick={() => handleClick('8')}
          />
          <Button
            value={9}
            backgroundColor={primaryButtonColor}
            onClick={() => handleClick('9')}
          />
          <Button
            value='*'
            backgroundColor={secondaryButtonColor}
            onClick={() => handleClick('*')}
          />

          <Button
            value='C'
            backgroundColor={primaryButtonColor}
            onClick={() => handleClear()}
          />
          <Button
            value={0}
            backgroundColor={primaryButtonColor}
            onClick={() => handleClick('0')}
          />
          <Button
            value='='
            backgroundColor='white'
            onClick={() => handleEqual()}
          />
          <Button
            value='/'
            backgroundColor={secondaryButtonColor}
            onClick={() => handleClick('/')}
          />
        </div>
      </div>
    </>
  )
}

export default Calculator
