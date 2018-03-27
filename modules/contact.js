var Contact = React.createClass({
            propTypes: {
                item: React.PropTypes.object.isRequired,
            },

            render: function () {
                return ( <
                    div className = {
                        'item'
                    } >
                    <
                    img className = {
                        'contact_image'
                    }
                    src = {
                        'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico'
                    } /> <
                    div className = {
                        'contactContent'
                    } >
                    <
                    p className = {
                        'contact_label'
                    } > Imię: {
                        this.props.item.firstName
                    } < /p> <
                    p className = {
                        'contact_label'
                    } > Nazwisko: {
                        this.props.item.lastName
                    } < /p> <
                    p className = {
                        'contact_email'
                    }
                    href = {
                        'mailto' + this.props.item.email
                    } > Email: {
                        this.props.item.email
                    } <
                    /p> <
                    /div> </div>
                )
            }
    });
