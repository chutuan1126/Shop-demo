import React from 'react';
import './collection.styles.css';

import { connect } from 'react-redux';

import CollectionItem from '../../components/Collection_Item/Colletion_Item';

const Collection = ({ match, collections }) => {
    const collectionId = match.params.collectionId;

    const collection = collections.find((collection) => collectionId === collection.routeName)
    
    if(!collection) {
        return <h2 className='not-thing-here'>Not thing here !</h2>
    }

    return (
        <div className='collection-page'>
            <h1>{collection.title}</h1>
            <div className='collection-view'>
                {
                    collection.items.map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    collections: state.shop
})

export default connect(mapStateToProps)(Collection);