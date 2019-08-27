import React, { Component } from 'react';

import { connect } from 'react-redux';

import CollectionPreview from '../../components/Collection_Preview/Collection_Preview';

class ShopPage extends Component {
    render() {
        const { collections } = this.props;
        if(collections === null) {
            return <span>Not thing here !</span>
        }
        return (
            <div className='shop_page'>
                {
                    collections.map(({ id, ...otherCollections }) => <CollectionPreview key={id} {...otherCollections} />)
                }
            </div>
        )
    }
}
  
const mapStateToProps = state => ({
    collections: state.shop
})

export default connect(mapStateToProps)(ShopPage);