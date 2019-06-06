import React from 'react';

export default class Searchbox extends React.Component {
    constructor(props) {
        super(props);

        this.dataset = [
            89, 30, 25, 32, 72, 70, 51, 42, 25, 24,
            53, 55, 78, 50, 13, 40, 48, 32, 26, 2,
            14, 33, 45, 72, 56, 44, 21, 88, 27, 68,
            15, 62, 93, 98, 73, 28, 16, 46, 87, 28,
            65, 38, 67, 16, 85, 63, 23, 69, 64, 91,
            9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46,
            13, 11, 64, 76, 31, 26, 38, 28, 13, 17,
            69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98,
            46, 27, 22, 87, 49, 83, 6, 39, 42, 51,
            54, 84, 34, 53, 78, 40, 14, 5
        ];
        this.state = {
            answer: null
        }
    }

    linearSearch(array, num) {
        let count = 0;
        for (let i = 0; i < array.length; i++) {
            count++;
            if (num === array[i]) {
                this.setState({
                    answer: `${num} found in dataset in ${count} try/tries/`
                });
                return;
            }
        }
        this.setState({
            answer: `${num} not found in dataset.`
        })
    }

    binarySearch(array, num, start, end, count) {
        start = start === undefined ? 0 : start;
        end = end === undefined ? array.length : end;
        count = count === undefined ? 0 : count;
        let sortedDataset = array.sort((a, b) => {
            return a - b;
        });
        const index = Math.floor((start + end) / 2);
        const item = array[index];

        if(start > end) {
            this.setState({
                answer: `${num} not found in dataset.`
            });
            return;
        }

        if (item === num) {
            count++;
            this.setState({
                answer: `${num} found in dataset in ${count} try/tries.`
            })
            return;
        } else if (item < num) {
            count++;
            return this.binarySearch(array, num, index + 1, end, count);
        } else if (item > num) {
            count++;
            return this.binarySearch(array, num, start, index - 1, count);
        }
    }

    render() {
        return (
            <div className='search'>
                <form>
                    <label htmlFor='number'>Number: </label>
                    <input
                        name='number'
                        ref={(input) => {
                            this.inputNumber = input;
                        }}
                    >
                    </input>
                    <button onClick={event => {
                        event.preventDefault();
                        this.linearSearch(this.dataset, Number(this.inputNumber.value));
                    }}>Linear Search</button>
                    <button onClick={event => {
                        event.preventDefault();
                        this.binarySearch(this.dataset, Number(this.inputNumber.value));
                    }}>Binary Search</button>
                </form>
                <p>{this.state.answer}</p>
            </div>
        )
    }
}