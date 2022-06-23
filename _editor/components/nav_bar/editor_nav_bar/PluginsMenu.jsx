import i18n from 'i18next';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

/**
 * Plugin menu in the editor's navbar
 */
export default class PluginsMenu extends Component {
    /**
     * Constructor
     */
    constructor(props) {
        super(props);
        this.state = { categories: [] };
    }

    /**
     * Click on plugin category callback
     */
    openPlugin(category) {
        this.props.setcat(category);
    }

    /**
     * Render React Component
     * @returns {code}
     */
    render() {
        let categories = [
            // {
            //     name: 'image',
            //     displayName: "Gambar",
            //     icon: 'image',
            // },
            {
                name: 'text',
                displayName: "Teks",
                icon: 'text_fields',
            },
            {
                name: 'multimedia',
                displayName: "Video",
                icon: 'play_circle_outline',
            },
            {
                name: 'objects',
                displayName: "File",
                icon: 'unarchive',
            },
            {
                name: 'evaluation',
                displayName: "Kuis",
                icon: 'school',
            },

        ];
        return (
            <div className="pluginsMenu" onClick={()=> this.openPlugin("")}>
                {categories.map((cat, ind)=>{
                    if (this.state.categories.indexOf(cat.name) > -1) {
                        return (<button key={ind}
                            className={ this.props.hideTab === 'show' && this.props.category === cat.name ? 'navButtonPlug active' : 'navButtonPlug' }
                            title={cat.displayName} disabled={false /* disablePlugins*/}
                            onClick={(e) => { this.props.category === cat.name ? this.openPlugin('') : this.openPlugin(cat.name); e.stopPropagation();}}>
                            <i className="material-icons">{cat.icon}</i><span className="hideonresize"> {cat.displayName}</span>
                        </button>);
                    }
                    return null;
                })}
            </div>
        );
    }

    componentDidMount() {
        // Only will show categories that have at least one plugin inside
        let categories = [];
        let plugins = Ediphy.Plugins.getPluginConfigs();
        for (let plug in plugins) {
            if (categories.indexOf(plugins[plug].category) === -1) {
                categories.push(plugins[plug].category);
            }
        }
        this.setState({ categories });
    }
}

PluginsMenu.propTypes = {
    /**
     * Plugin's category shown
     */
    category: PropTypes.string.isRequired,
    /**
     * Toggles the plugin bar's visibility
     */
    hideTab: PropTypes.oneOf(["show", "hide"]).isRequired,
    /**
     * Changes the chosen plugin category
     * */
    setcat: PropTypes.func.isRequired,
};
