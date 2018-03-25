import React, {Component} from 'react';
import { Table, Input, Popconfirm, Button, Icon } from 'antd';

const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i.toString(),
    ID: i,
    name: `Edrward ${i}`,
    writer: 'www',
    cost: 32,
    date:'data',
    publish:'pubpub',
    address: `London Park no. ${i}`,
  });
}

const EditableCell = ({ editable, value, onChange }) => (
  <div>
    {editable
      ? <Input style={{ margin: '-5px 0' }} value={value} onChange={e => onChange(e.target.value)} />
      : value
    }
  </div>
);

class AdminThese extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{
        title: 'ID',
        dataIndex: 'ID',
        key: 'id',
        width: 100,
        sorter: (a,b)=>a<b,
        render: (text, record) => <EditableCell editable={0} value={text} />
      }, {
        title: '书名',
        dataIndex: 'name',
        key: 'name',
        sorter: (a,b)=>a<b,
        filterDropdown: (
          <div className="custom-filter-dropdown">
            <Input
              ref={ele => this.searchInput = ele}
              placeholder="Search name"
              value={this.state.searchText}
              onChange={this.onInputChange}
              onPressEnter={this.onSearch}
            />
            <Button type="primary" onClick={this.onSearch}>Search</Button>
          </div>
        ),
        filterIcon: <Icon type="smile-o" style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }} />,
        filterDropdownVisible: this.state.filterDropdownVisible,
        onFilterDropdownVisibleChange: (visible) => {
          this.setState({
            filterDropdownVisible: visible,
          }, () => this.searchInput && this.searchInput.focus());
        },
        onFilter: (value, record) => record.address.indexOf(value) === 0,
        render: (text, record) => this.renderColumns(text, record, 'name')
      }, {
        title: '作者',
        dataIndex: 'writer',
        key: 'writer',
        render: (text, record) => this.renderColumns(text, record, 'name')
      }, {
        title: '价格',
        dataIndex: 'cost',
        key: 'cost',
        sorter: (a,b)=>a.cost-b.cost,
        render: (text, record) => this.renderColumns(text, record, 'name')
      }, {
        title: '出版年份',
        dataIndex: 'date',
        key: 'date',
        sorter: (a,b)=>a<b,
        render: (text, record) => this.renderColumns(text, record, 'name')
      }, {
        title: '出版社',
        dataIndex: 'publish',
        key: 'publish',
        render: (text, record) => this.renderColumns(text, record, 'name')
      }, {
        title: '编辑',
        dataIndex: 'edit',
        key: 'edit',
        width: 200,
        render: (text, record) => {
            const { editable } = record;
            return (
              <div className="editable-row-operations">
                {
                  editable ?
                    <span>
                      <a onClick={() => this.save(record.key)}>Save</a>
                      <Popconfirm title="Sure to cancel?" onConfirm={() => this.cancel(record.key)}>
                        <a style={{marginLeft:20}}>Cancel</a>
                      </Popconfirm>
                    </span>
                    : <span>
                        <a onClick={() => this.edit(record.key)}>Edit</a>
                        <Popconfirm title="Sure to delete?" onConfirm={() => this.cancel(record.key)}>
                          <a style={{marginLeft:20}}>Del</a>
                        </Popconfirm>
                      </span>
                }
              </div>
            );
          },
        }
      ]
    this.state = { data };
    this.cacheData = data.map(item => ({ ...item }));
  }
  state = {
    filterDropdownVisible: false,
    data: data,
    searchText: '',
    filtered: false,
  };
  onInputChange = (e) => {
    this.setState({ searchText: e.target.value });
  }
  onSearch = () => {
    console.log('onsearch')
    const { searchText } = this.state;
    const reg = new RegExp(searchText, 'gi');
    this.setState({
      filterDropdownVisible: false,
      filtered: !!searchText,
      data: data.map((record) => {
        console.log('data search')
        const match = record.name.match(reg);
        if (!match) {
          return null;
        }
        console.log('record',record)
        return ( {
          ...record,
          name: (
            <span>
              {record.name.split(reg).map((text, i) => (
                i > 0 ? [<span className="highlight">{match[0]}</span>, text] : text
              ))}
            </span>
          ),
        });
      }).filter(record => !!record),
    });
  }
  renderColumns(text, record, column) {
    return (
      <EditableCell
        editable={record.editable}
        value={text}
        onChange={value => this.handleChange(value, record.key, column)}
      />
    );
  }
  handleChange(value, key, column) {
    const newData = [...this.state.data];
    const target = newData.filter(item => key === item.key)[0];
    if (target) {
      target[column] = value;
      this.setState({ data: newData });
    }
  }
  edit(key) {
    const newData = [...this.state.data];
    const target = newData.filter(item => key === item.key)[0];
    if (target) {
      target.editable = true;
      this.setState({ data: newData });
    }
  }
  save(key) {
    const newData = [...this.state.data];
    const target = newData.filter(item => key === item.key)[0];
    if (target) {
      delete target.editable;
      this.setState({ data: newData });
      this.cacheData = newData.map(item => ({ ...item }));
    }
  }
  cancel(key) {
    const newData = [...this.state.data];
    const target = newData.filter(item => key === item.key)[0];
    if (target) {
      Object.assign(target, this.cacheData.filter(item => key === item.key)[0]);
      delete target.editable;
      this.setState({ data: newData });
    }
  }
  render() {
    const columns = [{
        title: 'ID',
        dataIndex: 'ID',
        key: 'id',
        sorter: (a,b)=>a<b,
      }, {
        title: '书名',
        dataIndex: 'name',
        key: 'name',
        sorter: (a,b)=>a<b,
        filterDropdown: (
          <div className="custom-filter-dropdown">
            <Input
              ref={ele => this.searchInput = ele}
              placeholder="Search name"
              value={this.state.searchText}
              onChange={this.onInputChange}
              onPressEnter={this.onSearch}
            />
            <Button type="primary" onClick={this.onSearch}>Search</Button>
          </div>
        ),
        filterIcon: <Icon type="smile-o" style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }} />,
        filterDropdownVisible: this.state.filterDropdownVisible,
        onFilterDropdownVisibleChange: (visible) => {
          this.setState({
            filterDropdownVisible: visible,
          }, () => this.searchInput && this.searchInput.focus());
        },
        onFilter: (value, record) => record.address.indexOf(value) === 0,
      }, {
        title: '作者',
        dataIndex: 'writer',
        key: 'writer',
      }, {
        title: '价格',
        dataIndex: 'cost',
        key: 'cost',
        sorter: (a,b)=>a.cost-b.cost
      }, {
        title: '出版年份',
        dataIndex: 'date',
        key: 'date',
        sorter: (a,b)=>a<b
      }, {
        title: '出版社',
        dataIndex: 'publish',
        key: 'publish',
      }, {
        title: '编辑',
        dataIndex: 'edit',
        key: 'edit',
        render: (text, record) => {
            const { editable } = record;
            return (
              <div className="editable-row-operations">
                {
                  editable ?
                    <span>
                      <a onClick={() => this.save(record.key)}>Save</a>
                      <Popconfirm title="Sure to cancel?" onConfirm={() => this.cancel(record.key)}>
                        <a>Cancel</a>
                      </Popconfirm>
                    </span>
                    : <a onClick={() => this.edit(record.key)}>Edit</a>
                }
              </div>
            );
          },
        }
      ]
    return (
        <div style={{width:1200,margin:'auto'}}>
        <Table bordered dataSource={this.state.data} columns={this.columns} />
        </div>
    );
  }
}

export default AdminThese;