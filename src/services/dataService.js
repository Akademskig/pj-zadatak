import React, { Component } from "react"
const BASE_IMG_URL = "https://api.adorable.io/avatars/60/"

export const dataServiceProvider = (ComponentToWrap) => {
    return class dataService extends Component {

        state = {
            newCount: 0,
            data: [],
            viewItem: null
        }
        getContent = async (path) => {
            const response = await fetch('/data.json').then(r => r.json())
            const newData = []
            response.data.forEach((d, i) => {
                newData.push(this.formatData(d, i))
            })
            const newCount = this.count(newData)
            const data = this.filterData(newData, path)
            this.setState({
                newCount,
                data,
                viewItem: data[0]
            })
        }

        count = (data) => {
            return data.filter(d => d.inbox && d.inbox.new).length
        }

        formatData = (data, i) => {
            return Object.assign(data,
                {
                    id: i,
                    image_url: `${BASE_IMG_URL}${i}`,
                    inbox: i <= 60 ?
                        {
                            important: i % 5 === 0 ? true : false,
                            new: i % 22 === 0 ? true : false
                        } : false,
                    mine: i > 60 ? {
                        sent: i % 2 === 0 ? true : false,
                        drafts: i % 2 !== 0 ? true : false
                    } : false,
                    title: data.title[0].toUpperCase().concat(data.title.substr(1))
                })
        }

        filterData = (data, path) => {
            switch (path) {
                case ("inbox"):
                    return data.filter(d => d.inbox).sort((a, b) => a.inbox.new ? -1 : 1)
                case ("important"):
                    return data.filter(d => d.inbox && d.inbox.important)
                case ("sent"):
                    return data.filter(d => d.mine && d.mine.sent)
                case ("drafts"):
                    return data.filter(d => d.mine && d.mine.drafts)
                case ("trash"):
                    return data.filter(d => !d.inbox)
                default: {
                    return data.filter(d => d.inbox).sort((a, b) => a.inbox.new ? -1 : 1)
                }
            }
        }

        componentWillReceiveProps = (nextProps) => {
            if (this.props.match !== nextProps.match)
                this.getContent(nextProps.match.path.substr(1))
        }
        componentWillMount() {
            this.getContent(this.props.match.path.substr(1))
        }
        render() {
            return (
                <ComponentToWrap {...this.props}{...this.state} ></ComponentToWrap>
            )
        }
    }

}



