import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import {getTransaction} from '../redux/actions/transaction';
import DateFormat from '../helpers/dateformat';
import Icon from 'react-native-vector-icons/Entypo';
import Arrow from 'react-native-vector-icons/Feather';
import Down from 'react-native-vector-icons/Ionicons';
class TransactionList extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  convertToRupiah = angka => {
    var rupiah = '';
    var angkarev = angka
      .toString()
      .split('')
      .reverse()
      .join('');
    for (var i = 0; i < angkarev.length; i++)
      if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + '.';
    return (
      'Rp' +
      rupiah
        .split('', rupiah.length - 1)
        .reverse()
        .join('')
    );
  };

  async componentDidMount() {
    await this.getTransaction();
  }
  async getTransaction() {
    await this.props.dispatch(getTransaction());
  }

  renderRow = ({item}) => {
    const sender = item.sender_bank;
    return (
      <View
        style={{
          backgroundColor: 'white',
          marginVertical: 5,
          marginHorizontal: 5,
          padding: 10,
          flexDirection: 'row',
          borderLeftWidth: 7,
          borderLeftColor: item.status === 'SUCCESS' ? '#57B484' : '#E9663F',
          borderRadius: 5,
        }}>
        <View style={{flex: 8, top: 12, alignItems: 'flex-start'}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold'}}>
              {item.sender_bank.toUpperCase()}
            </Text>
            <Text style={{fontWeight: 'bold'}}>
              <Arrow name="arrow-right" size={20} color="black" />
            </Text>
            <Text style={{fontWeight: 'bold'}}>
              {item.beneficiary_bank.toUpperCase()}
            </Text>
          </View>
          <View>
            <Text>-{item.beneficiary_name.toUpperCase()}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 3}}>
              <Text>{this.convertToRupiah(item.amount)}</Text>
            </View>
            <View style={{top: -15, flex: 2, position: 'absolute', left: 68}}>
              <Icon name="dot-single" size={50} color="black" />
            </View>
            <View style={{flex: 3}}>
              <Text>
                <DateFormat data={item.completed_at.substr(0, 10)} />
              </Text>
            </View>
          </View>
        </View>
        <View style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity>
            <View
              style={{
                borderWidth: 1,
                borderColor: item.status === 'SUCCESS' ? '#57B484' : '#E9663F',
                padding: 10,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor:
                  item.status === 'SUCCESS' ? '#57B484' : '#FFFFFF',
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  width: 70,
                  fontSize: 12,
                  textAlign: 'center',
                }}>
                {item.status}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    const {transaction} = this.props;
    const data = [];
    Object.keys(transaction).map(item => data.push(transaction[item]));

    return (
      <>
        <View style={{backgroundColor: '#F5F9F8', flex: 1}}>
          <View
            style={{
              backgroundColor: 'white',
              flexDirection: 'row',
              padding: 5,
              marginHorizontal: 5,
              marginVertical: 5,
              borderRadius: 5,
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 12,
              }}>
              <Arrow name="search" size={25} color="#BEBEBE" />
            </View>
            <View style={{flex: 7}}>
              <TextInput placeholder="Cari nama, bank, atau nominal" />
            </View>
            <TouchableOpacity>
              <View
                style={{
                  flex: 4,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <View>
                  <Text style={{color: '#E96641'}}> URUTKAN </Text>
                </View>
                <View>
                  <Down
                    name="ios-arrow-down"
                    style={{color: '#E96641'}}
                    size={25}
                    color="#BEBEBE"
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          {/* disini yukkkk kalau mau mapping */}

          <View style={{paddingBottom: 75}}>
            <FlatList
              data={data}
              renderItem={this.renderRow}
              keyExtractor={item => item.id}
            />
          </View>

          {/* disini yukkkk kalau mau mapping */}
        </View>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    transaction: state.transaction.transaction,
  };
};
export default connect(mapStateToProps)(TransactionList);
