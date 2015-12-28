import React, { Component } from 'react'
import store from '../redux/store'
import { Link } from 'react-router'
import ContributionListElement from '../elements/contribution_list_element'
import ContributionExpandedElement from '../elements/contribution_expanded_element'

const list = [
  <ContributionListElement key="1" type="commentary" title="This paper is flawed.  Hue Hue hueee." />,
  <ContributionListElement key="2" type="paper" title="A paper supporting this hypothesis." />,
  <ContributionListElement key="3" type="commentary" title="Feel good troll" />,
  <ContributionListElement key="4" type="commentary" title="This paper is flawed.  Hue Hue hueee." />,
  <ContributionListElement key="5" type="paper" title="A paper supporting this hypothesis." />,
  <ContributionListElement key="6" type="commentary" title="Feel good troll" />,
  <ContributionListElement key="7" type="commentary" title="This paper is flawed.  Hue Hue hueee." />,
  <ContributionListElement key="8" type="paper" title="A paper supporting this hypothesis." />,
  <ContributionListElement key="9" type="commentary" title="Feel good troll" />,
  <ContributionListElement key="10" type="commentary" title="This paper is flawed.  Hue Hue hueee." />,
  <ContributionListElement key="11" type="paper" title="A paper supporting this hypothesis." />,
  <ContributionListElement key="12" type="commentary" title="Feel good troll" />
]

export default class ContributionsListView extends Component {
  render() {
    return (
      <div>
        {list.map((item) => item)}
      </div>
    )
  }
}
