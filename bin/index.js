const _ = require('lodash')

const clickFlower = (browser, flower) => {
  const x = (flower - 1) * 300 + 60
  const y = 540
  browser.moveTo(undefined, x, y).mouseButtonClick().pause(5000)
  browser.moveTo(undefined, -x, -y).pause(2000)
}

const clickHive = (browser) => {
  const x = 60
  const y = 300
  browser.moveTo(undefined, x, y).mouseButtonClick().pause(10000)
  browser.moveTo(undefined, -x, -y).pause(2000)
}

const test = (browser) => {
  const host = process.env.HOST || 'localhost'
  const url = `http://${host}:4000`
  browser
    .url(url)
    .pause(1000)

  browser
    .moveTo(undefined, 100, 100)
    .mouseButtonClick().pause(2000)

  browser.moveTo(undefined, -100, -100).pause(2000)
  const list = _.shuffle([1, 2, 3])

  _.each(list, (flower) => {
    clickFlower(browser, flower)
  })

  if (_.last(list) === 1) {
    clickFlower(browser, 2)
  } else if (_.last(list) === 2) {
    clickFlower(browser, 3)
  } else {
    clickFlower(browser, 1)
  }


  clickHive(browser)
}

module.exports = {
  'Test Honey 1': test,
  'Test Honey 2': test,
  'Test Honey 3': test,
  'Test Honey 4': test,
  'Test Honey 5': test,
  'Test Honey 6': test,
  'Test Honey 7': test,
  'Test Honey 8': test,
}
