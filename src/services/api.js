
export const fetchLotSummary = () =>
    fetch('/api/lots/summary').then(r=> r.json());

export const fetchSpotTypeBreakdown = () =>
    fetch('/api/spots/type').then(r => r.json());

export const fetchSpots = () =>
    fetch('/api/spots/all').then(r => r.json()); 

export const fetchOfflineSensors= () =>
    fetch('/api/sensors/offline').then(r => r.json());

export const fetchActiveLots= () =>
    fetch('/api/lots/active').then(r => r.json());

export const fetchNearCapacity= () =>
    fetch('/api/lots/nearcap').then(r => r.json());


export const fetchHourlyOccupancy= () =>
    fetch('/api/occupancy/hourly').then(r => r.json());

export const fetchDailyOccupancy= () =>
    fetch('/api/occupancy/daily').then(r => r.json());

export const fetchPeakOccupancy= () =>
    fetch('/api/occupancy/peak').then(r => r.json());