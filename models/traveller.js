const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  let result = this.journeys.map((journey) => {
    return journey.startLocation;
  });
  return result;
};

Traveller.prototype.getJourneyEndLocations = function () {
  let result = this.journeys.map((journey) => {
    return journey.endLocation;
  });
  return result;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  let result = this.journeys.filter((journey) => {
    if (journey.transport === transport) {
      return journey;
    }
  });
  return result;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  let result = this.journeys.filter((journey) => {
    if (journey.distance > minDistance) {
      return journey;
    }
  });
  return result;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let total = this.journeys.reduce((runningTotal, journey) => {
    return runningTotal += journey.distance;
  }, 0);
  return total;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  return this.journeys.reduce((transportList, journey) => {
    if (transportList.includes(journey.transport) == false) {
      transportList.push(journey.transport)
    }
    return transportList;
  },[])
};

// Traveller.prototype.getUniqueModesOfTransport = function () {
//   let transportArray = this.journeys.map((journey) => {
//     return journey.transport;
//   });
//   transportArray.filter()
// };


module.exports = Traveller;
