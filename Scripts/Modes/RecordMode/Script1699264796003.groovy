import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.openBrowser('')

WebUI.navigateToUrl('https://rahulshettyacademy.com/AutomationPractice/')

WebUI.click(findTestObject('Object Repository/RecordMode/Page_Practice Page/label_Radio1'))

WebUI.verifyElementClickable(findTestObject('Object Repository/RecordMode/Page_Practice Page/label_Radio1'))

WebUI.verifyElementClickable(findTestObject('Object Repository/RecordMode/Page_Practice Page/input_Suggession Class Example_autocomplete'))

WebUI.rightClick(findTestObject('Object Repository/RecordMode/Page_Practice Page/select_Select                     Option1  _bf898a'))

WebUI.rightClick(findTestObject('Object Repository/RecordMode/Page_Practice Page/select_Select                     Option1  _bf898a'))

WebUI.click(findTestObject('Object Repository/RecordMode/Page_Practice Page/div_Checkbox Example                       _6fc4f5'))

WebUI.verifyElementText(findTestObject('Object Repository/RecordMode/Page_Practice Page/h1_Practice Page'), 'Practice Page')

WebUI.closeBrowser()

