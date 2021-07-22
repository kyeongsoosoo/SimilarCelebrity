import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'
import {waitFor} from '@testing-library/dom'
import Store from './Store'

describe('Store', () => {
    const TestStore = new Store();
    TestStore.myPic = "test"

    const mock = new MockAdapter(axios);
    const mock_data = [{thumbnail:'test1'},{thumbnail:'test2'},{thumbnail:'test3'}];
    const mock_result = ['test1','test2','test3'];

    mock.onPost("https://kucc-celeb.herokuapp.com/uploadImage").reply(200, {
            info: true,
            faces: [{
                celebrity: {
                    value: 'mock_value',
                    confidence: '10'
                }
            }]
    })

    mock.onGet("https://kucc-celeb.herokuapp.com/find-image").reply(200,{
        
            items: mock_data
        
    })

    it('should get similarImgList', async () =>{
        await TestStore.findCeleb();
        expect(TestStore.similarImgList).toEqual(mock_result);
    })
})