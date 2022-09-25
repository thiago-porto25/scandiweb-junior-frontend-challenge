import React from 'react'
import { connect, ConnectedProps } from 'react-redux'

import type { AppDispatch, RootState } from '../../../../shared/types'

import type { ICurrency } from '../../types'
import { changeCurrentCurrency } from '../../store/currency.slice'
import { getCurrenciesThunk } from '../../store/thunks'
import {
  selectCurrentCurrency,
  selectCurrencyList,
} from '../../store/selectors'

import { ChevronIcon } from '../../../../shared/svg'
import { Typography } from '../../../../shared/components'
import {
  ChevronContainer,
  ToggleCurrencySwitcher,
  CurrencyList,
  CurrencyOption,
  CurrencySwitcherContainer,
} from './styles'

type PropsFromRedux = ConnectedProps<typeof connector>

interface ICurrencySwitcherProps extends PropsFromRedux {
  dispatch: AppDispatch
}

interface ICurrencySwitcherState {
  isOpen: boolean
}

class CurrencySwitcher extends React.Component<
  ICurrencySwitcherProps,
  ICurrencySwitcherState
> {
  state = {
    isOpen: false,
  }

  componentDidMount(): void {
    if (!this.props.currencyList) this.props.dispatch(getCurrenciesThunk())
    document.addEventListener('click', this.closeCurrencyList)
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.closeCurrencyList)
  }

  handleSwitcherToggle = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.stopPropagation()
    this.setState({ isOpen: !this.state.isOpen })
  }

  closeCurrencyList = (): void => {
    this.setState({ isOpen: false })
  }

  changeSelectedCurrency = (currency: ICurrency): void => {
    this.props.dispatch(changeCurrentCurrency(currency))
    this.closeCurrencyList()
  }

  render(): React.ReactNode {
    const { currencyCurrency, currencyList } = this.props
    const { isOpen } = this.state

    return (
      <CurrencySwitcherContainer>
        <ToggleCurrencySwitcher onClick={this.handleSwitcherToggle}>
          <Typography textStyle='priceRegular' as='span'>
            {currencyCurrency?.symbol}
          </Typography>

          <ChevronContainer shouldRotate={isOpen}>
            <ChevronIcon />
          </ChevronContainer>
        </ToggleCurrencySwitcher>

        {isOpen && currencyList?.length && (
          <CurrencyList>
            {currencyList.map((currency, i) => (
              <li key={`${currency.label}-${i}`}>
                <CurrencyOption
                  onClick={(e) => {
                    e.stopPropagation()
                    this.changeSelectedCurrency(currency)
                  }}
                  isSelected={currencyCurrency?.label === currency.label}
                >
                  <Typography textStyle='priceRegular' as='span'>
                    {currency.symbol} {currency.label}
                  </Typography>
                </CurrencyOption>
              </li>
            ))}
          </CurrencyList>
        )}
      </CurrencySwitcherContainer>
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  currencyCurrency: selectCurrentCurrency(state),
  currencyList: selectCurrencyList(state),
})
const connector = connect(mapStateToProps)

export default connector(CurrencySwitcher)
