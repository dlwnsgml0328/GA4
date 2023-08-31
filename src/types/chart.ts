export type FinancialIndicator = 'gold_price' | 'spx_500' | 'treasury_interest';

export enum PeriodType {
  overall = 'overall',
  modern = 'modern',
  postwar = 'postwar',
  contemporary = 'contemporary',
}

export type MediumType =
  | 'Works on Paper'
  | 'Prints and Editions'
  | 'Painting'
  | 'Photography'
  | 'Sculpture'
  | 'Textile Art'
  | 'Film/Video Art'
  | 'Installation'
  | 'Mixed Media Art'
  | 'All';

export type ArtistHashId = string;

export type HighChartData = {
  name: SingleDataSeriesName;
  line: number[][]; // [Date, Index]
  column?: number[][]; // [Date, Volume]
};

/**
 * @name IndexType
 * @description IndexType is the type of the index
 * @property {string} artistIndex - Artist Index
 * @property {string} comparisonArtistIndex - Comparison Artist Index
 * @property {string} eazelIndex - Eazel Index
 * @property {string} eazelExpectedReturn - Eazel Expected Return
 */
type IndexType = 'artistIndex' | 'comparisonArtistIndex' | 'eazelIndex' | 'eazelExpectedReturn';

/**
 * @name ChartDataPoint
 * @description ChartDataPoint is a single point in a chart
 * @property {number} volume - Volume of the point
 * @property {number} index - Index of the point
 * @property {string} date - Date of the point
 */
type ChartDataPoint = {
  volume?: number;
  index: number;
  date: string;
};

/**
 * @name ChartSingleDataSeries
 * @description ChartSingleDataSeries is a single data series in a chart
 * @property {string} name - Name of the data series. Inherited from the name of the data series
 * @property {ChartDataPoint[]} data - Data points of the data series
 */
type ChartSingleDataSeries<T, U> = T & U;

/**
 * @name SingleDataSeriesName
 * @description SingleDataSeriesName is the name of a single data series
 */
export type SingleDataSeriesName = MediumType | ArtistHashId | '';

type DataPoints = {
  data: ChartDataPoint[];
};

type IndexPoint = {
  index: number;
  date: string;
};

/**
 * @name IndexData
 * @description IndexData is the data of an index
 */
type IndexData<T extends IndexType, U, V> = Record<T, ChartSingleDataSeries<U, V>[]>;

type IndexChartData<Key extends IndexType, T, U> = {
  data: IndexData<Key, T, U>;
};

/**
 * @name ArtistIndexData
 * @description ArtistIndexData is the data of the artist index
 */
export type ArtistIndexData = IndexChartData<
  'artistIndex',
  DataPoints,
  Record<'name', MediumType>
>[];

/**
 * @name ArtistComparisonIndexData
 * @description ArtistComparisonIndexData is the data of the artist comparison index
 */
export type ArtistComparisonIndexData = IndexChartData<
  'comparisonArtistIndex',
  DataPoints,
  Record<'name', ArtistHashId> | Record<'finance', FinancialIndicator>
>[];

/**
 * @name EazelExpectedReturnData
 * @description EazelExpectedReturnData is the data
 */
export type EazelExpectedReturnData = IndexChartData<
  'eazelExpectedReturn',
  IndexPoint,
  Record<undefined, undefined>
>[];

/**
 * @name EazelIndexData
 * @description EazelIndexData is the data
 */
export type EazelIndexData = {
  data: {
    eazelIndex: {
      data: ChartSingleDataSeries<DataPoints, { name: PeriodType }>[];
    };
  };
}[];
