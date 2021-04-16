<?php

namespace app\controllers;

use Yii;
use app\models\Multimediaprotagonist;
use app\models\MultimediaprotagonistSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

/**
 * MultimediaprotagonistController implements the CRUD actions for Multimediaprotagonist model.
 */
class MultimediaprotagonistController extends Controller
{
    /**
     * {@inheritdoc}
     */
    public function behaviors()
    {
        return [
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'delete' => ['POST'],
                ],
            ],
        ];
    }

    /**
     * Lists all Multimediaprotagonist models.
     * @return mixed
     */
    public function actionIndex()
    {
        $searchModel = new MultimediaprotagonistSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);

        return $this->render('index', compact('searchModel', 'dataProvider'));
        /*
        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);*/
    }

    /**
     * Displays a single Multimediaprotagonist model.
     * @param integer $fkmultimedia
     * @param integer $fkprotagonist
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($fkmultimedia, $fkprotagonist)
    {
        return $this->render('view', [
            'model' => $this->findModel($fkmultimedia, $fkprotagonist),
        ]);
    }

    /**
     * Creates a new Multimediaprotagonist model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new Multimediaprotagonist();

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'fkmultimedia' => $model->fkmultimedia, 'fkprotagonist' => $model->fkprotagonist]);
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    /**
     * Updates an existing Multimediaprotagonist model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $fkmultimedia
     * @param integer $fkprotagonist
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($fkmultimedia, $fkprotagonist)
    {
        $model = $this->findModel($fkmultimedia, $fkprotagonist);

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'fkmultimedia' => $model->fkmultimedia, 'fkprotagonist' => $model->fkprotagonist]);
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing Multimediaprotagonist model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param integer $fkmultimedia
     * @param integer $fkprotagonist
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionDelete($fkmultimedia, $fkprotagonist)
    {
        $this->findModel($fkmultimedia, $fkprotagonist)->delete();

        return $this->redirect(['index']);
    }

    /**
     * Finds the Multimediaprotagonist model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $fkmultimedia
     * @param integer $fkprotagonist
     * @return Multimediaprotagonist the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($fkmultimedia, $fkprotagonist)
    {
        if (($model = Multimediaprotagonist::findOne(['fkmultimedia' => $fkmultimedia, 'fkprotagonist' => $fkprotagonist])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }
}
