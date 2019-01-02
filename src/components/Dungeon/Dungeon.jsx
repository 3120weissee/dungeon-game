import React from 'react'
import PageLayout from '../../containers/PageLayout'

export default class Dungeon extends React.Component {
    render() {
        const { goToMain } = this.props
        return (
            <PageLayout
                mainView={<div>Event Panel</div>}
                buttonList={[
                    <button key='dungeon-1' onClick={goToMain}>Back Home</button>,
                    <button key='dungeon-2' onClick={() => {console.log('continue dungeon')}}>Continue</button>
                ]}
            />
        )
    }
}
