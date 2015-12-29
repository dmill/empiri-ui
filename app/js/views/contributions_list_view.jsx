import React, { Component } from 'react'
import store from '../redux/store'
import { Link } from 'react-router'
import ContributionListElement from '../elements/contribution_list_element'
import ContributionExpandedElement from '../elements/contribution_expanded_element'

const list = [
  <ContributionListElement id="1"  key="1" type="commentary" title="This paper is flawed.  Hue Hue hueee." />,
  <ContributionListElement id="2"  key="2" type="paper" title="A paper supporting this hypothesis." />,
  <ContributionListElement id="3"  key="3" type="commentary" title="Feel good troll" />,
  <ContributionListElement id="4"  key="4" type="commentary" title="This paper is flawed.  Hue Hue hueee." />,
  <ContributionListElement id="5"  key="5" type="paper" title="A paper supporting this hypothesis." />,
  <ContributionListElement id="6"  key="6" type="commentary" title="Feel good troll" />,
  <ContributionListElement id="7"  key="7" type="commentary" title="This paper is flawed.  Hue Hue hueee." />,
  <ContributionListElement id="8"  key="8" type="paper" title="A paper supporting this hypothesis." />,
  <ContributionListElement id="9"  key="9" type="commentary" title="Feel good troll" />,
  <ContributionListElement id="10" key="10" type="commentary" title="This paper is flawed.  Hue Hue hueee." />,
  <ContributionListElement id="11" key="11" type="paper" title="A paper supporting this hypothesis." />,
  <ContributionListElement id="12" key="12" type="commentary" title="Feel good troll" />
]

export default class ContributionsListView extends Component {
  render() {
    return (
      <div className="contributions-list-view">
        {list.map((item) => item)}
      </div>
    )
  }
}
